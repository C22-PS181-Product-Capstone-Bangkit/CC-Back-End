const { nanoid } = require("nanoid");
const db = require("../models");
const Likes = db.Likes;

const LikesService = () => {
  const createLikes = async (idAccount, idRestaurant, status) => {
    const likes = await getLikes();
    if (likes) {
      const isLikes = await Likes.findOne({
        where: { idAccount, idRestaurant },
      });
      if (isLikes) return 1;
    }
    const result = await Likes.create({
      id: `likes-${nanoid(17)}`,
      idRestaurant: idRestaurant,
      idAccount: idAccount,
      status: status,
    });
    return result;
  };

  const updateLikesById = async (id, idAccount, idRestaurant) => {
    const result = await Likes.update({ idRestaurant }, { where: { id, idAccount } });
    return result[0];
  };

  const deleteLikesById = async (id, idAccount) => {
    const result = await Likes.destroy({ where: { id, idAccount } });
    return result;
  };

  const getLikes = async () => {
    const likes = await Likes.findAll();
    if (likes.length === 0) {
      return [];
    }
    return likes;
  };

  const getLikesById = async (id) => {
    const likes = await Likes.findOne({ where: { id } });
    if (!likes) {
      return [];
    }
    return likes;
  };

  const getLikesByUserId = async (idAccount) => {
    const likes = await Likes.findAll({ where: { idAccount } });
    if (!likes) {
      return [];
    }
    return likes;
  };

  return {
    createLikes,
    updateLikesById,
    deleteLikesById,
    getLikes,
    getLikesById,
    getLikesByUserId,
  };
};

module.exports = LikesService;
