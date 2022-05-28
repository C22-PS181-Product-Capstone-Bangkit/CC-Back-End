const ReviewService = require("../services/Review.service");
const RestaurantService = require("../services/Restaurant.service");

module.exports = {
  getReviewAll: async (req, res) => {
    try {
      const result = await ReviewService().getReview();
      if (!result) res.status(500).send({ message: "Tidak ada data review" });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getReviewDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ReviewService().getReviewById(id);
      if (!result)
        res.status(500).send({ message: "Data review tidak ditemukan" });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  editReview: async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const { subject, description, rating } = req.body;
      const result = await ReviewService().updateReviewById(
        id,
        user.id,
        subject,
        description,
        rating
      );
      if (result === 0)
        res.status(400).send({
          message: "Review tidak ditemukan. Review gagal diperbarui",
        });
      if (result === 1) {
        const resto = await ReviewService().getReviewById(id);
        RestaurantService().updateRating(resto.dataValues.idRestaurant);
        res.status(200).send({
          message: "Review berhasil diperbarui",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ReviewService().deleteReviewById(id);
      if (result === 0)
        res.status(400).send({
          message: "Review tidak ditemukan. Review gagal dihapus",
        });
      if (result === 1) {
        const resto = await ReviewService().getReviewById(id);
        RestaurantService().updateRating(resto.dataValues.idRestaurant);
        res.status(200).send({
          message: "Review berhasil diperbarui",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  postReview: async (req, res) => {
    try {
      const { user } = req;
      const { subject, idRestaurant, description, rating } = req.body;
      const result = await ReviewService().createReview(
        user.id,
        idRestaurant,
        subject,
        description,
        rating
      );
      if (result === 0) {
        res.status(400).send({
          message: "Harap isi subject dan rating",
        });
      }
      if (result === 1) {
        res.status(400).send({
          message: "Resto sudah direview",
        });
      }
      RestaurantService().updateRating(idRestaurant);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
