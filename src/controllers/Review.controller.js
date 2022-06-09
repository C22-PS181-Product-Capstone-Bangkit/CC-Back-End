const ReviewService = require("../services/Review.service");
const RestaurantService = require("../services/Restaurant.service");

module.exports = {
  getReviewAll: async (req, res) => {
    try {
      const result = await ReviewService().getReview();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getReviewDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ReviewService().getReviewById(id);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  editReview: async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const { description, rating } = req.body;
      const result = await ReviewService().updateReviewById(
        id,
        user.id,
        // subject,
        description,
        rating
      );
      if (result === 0)
        return res.status(404).send({
          error : true,
          message: "Review tidak ditemukan. Review gagal diperbarui",
        });
      if (result === 1) {
        return res.status(201).send({
          error : false,
          message: "Review berhasil diperbarui",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ReviewService().deleteReviewById(id);
      if (result === 0)
        return res.status(404).send({
          error : true,
          message: "Review tidak ditemukan. Review gagal dihapus",
        });
      if (result === 1) {
        return res.status(200).send({
          error : false,
          message: "Review berhasil dihapus",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postReview: async (req, res) => {
    try {
      const { user } = req;
      const { idRestaurant, description, rating } = req.body;
      const result = await ReviewService().createReview(
        user.id,
        idRestaurant,
        // subject,
        description,
        rating
      );
      if (result === 0) {
        return res.status(400).send({
          error : true,
          message: "Harap isi subject dan rating",
        });
      }
      if (result === 1) {
        return res.status(400).send({
          error : true,
          message: "Resto sudah direview",
        });
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
