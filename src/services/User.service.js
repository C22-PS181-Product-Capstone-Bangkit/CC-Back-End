const { nanoid } = require("nanoid");
const response = require("express").response;
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

const UserService = () => {
  const authenticate = async ({ email, password }) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) return Promise.reject("Email/password tidak sesuai");
      const getPassword = user.getDataValue("password");
      const isMatch = bcrypt.compareSync(password, getPassword);
      return isMatch
        ? Promise.resolve(result)
        : Promise.reject("Email/password tidak sesuai");
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const register = async (email, name, password) => {
    if (!email || !name || !password) {
      return null;
    }
    const result = await User.create({
      id: `cemil-${nanoid()}`,
      idFriend: `${nanoid(5).toLocaleUpperCase()}`,
      name: name,
      email: email,
      address: null,
      password: bcrypt.hashSync(password, 8),
      profilePic: null,
    });
    return result.dataValues;
  };

  findUserById = async ({ id }) => {
    try {
      const user = await User.findByPk(id);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  deleteUser = async ({ id }) => {
    try {
      const user = await User.findByPk(id);
      if (user) {
        User.destroy({
          where: { id: id },
        });
        return Promise.resolve("ID berhasil dihapus");
      }
      return Promise.reject("ID tidak ditemukan");
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    authenticate,
    deleteUser,
    findUserById,
    register,
  };
};

module.exports = UserService;
