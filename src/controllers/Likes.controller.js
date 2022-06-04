const LikesService = require("../services/Likes.service");

module.exports = {
  getLikes: async (req, res) => {
    try {
      const result = await LikesService().getLikes();
      if (!result) return res.status(500).send([]);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getLikesDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await LikesService().getLikesById(id);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  editLikes: async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const { idRestaurant } = req.body;
      const result = await LikesService().updateLikesById(id, user.id, idRestaurant);
      if (result === 0)
        return res.status(400).send({
          message: "Favorit tidak ditemukan. Likes gagal diperbarui",
        });
      if (result === 1) {
        return res.status(200).send({
          message: "Favorit berhasil diperbarui",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  deleteLikes: async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const result = await LikesService().deleteLikesById(id, user.id);
      if (result === 0)
        return res.status(400).send({
          message: "Favorit tidak ditemukan/User tidak dikenali. Favorit gagal dihapus",
        });
      if (result === 1) {
        return res.status(200).send({
          message: "Favorit berhasil dihapus",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postLikes: async (req, res) => {
    try {
      const { user } = req;
      const { idRestaurant } = req.body;
      const result = await LikesService().createLikes(
        user.id,
        idRestaurant
      );
      if (result === 1) {
        return res.status(400).send({
          message: "Favorit telah tersimpan",
        });
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
