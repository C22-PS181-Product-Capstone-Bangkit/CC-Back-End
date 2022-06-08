const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

const UserService = () => {
  const authenticate = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return 0;
    const getPassword = user.getDataValue("password");
    const isMatch = bcrypt.compareSync(password, getPassword);
    return isMatch ? user : 0;
  };

  const getUserById = async (id) => {
    const user = await User.findOne({ where: { id }, raw: true });
    return user;
  };

  const register = async (email, name, password) => {
    if (!email || !name || !password) {
      return 0;
    }
    const isRegistrate = await User.findOne({ where: { email } });
    if (isRegistrate) {
      return 1;
    }
    const result = await User.create({
      id: `cemil-${nanoid()}`,
      idFriend: `${nanoid(5).toLocaleUpperCase()}`,
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 8),
      profilePic: null,
      phone: null,
    });
    return result;
  };

  const updateUserById = async (id, name, phone, email) => {
    const checked1 = await User.findOne({ where: { email, id }, raw: true });
    if (checked1) {
      await User.update({ name, phone }, { where: { id } });
      return 1;
    }
    const checked2 = await User.findOne({ where: { email }, raw: true });
    if (checked2) {
      return 2;
    }
    await User.update({ name, phone, email }, { where: { id } });
    return 3;
  };

  const updateProfilePic = async (id, profilePic) => {
    await User.update({ profilePic }, { where: { id } });
  };

  const deleteUserById = async (id) => {
    const user = await User.findByPk(id);
    if (user) {
      User.destroy({
        where: { id: id },
      });
      return 1;
    }
    return 0;
  };

  const resetPassword = async (id, oldPassword, password) => {
    const user = await User.findByPk(id);
    if (password === oldPassword) {
      return 3;
    }
    if (user) {
      if (bcrypt.compareSync(oldPassword, user.getDataValue("password"))) {
        user.update(
          { password: bcrypt.hashSync(password, 8) },
          {
            where: { id: id },
          }
        );
        return 2;
      } else {
        return 1;
      }
    }
    return 0;
  };

  return {
    authenticate,
    deleteUserById,
    getUserById,
    updateUserById,
    updateProfilePic,
    register,
    resetPassword,
  };
};

module.exports = UserService;
