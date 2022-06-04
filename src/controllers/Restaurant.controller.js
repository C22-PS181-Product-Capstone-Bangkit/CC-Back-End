const RestaurantService = require("../services/Restaurant.service");
const ReviewService = require("../services/Review.service");
const UserService = require("../services/User.service");

module.exports = {
  getRestaurant: async (req, res) => {
    try {
      const { category } = req.query;
      let result = category
        ? await RestaurantService().getRestaurantByCategory(category)
        : await RestaurantService().getRestaurant();
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          let count = await ReviewService().getCountReviewByRestaurantId(
            result[i].id
          );
          let rating = await RestaurantService().getRating(result[i].id);
          result[i]["countReview"] = count;
          result[i]["rating"] = rating;
        }
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getRestaurantDetail: async (req, res) => {
    try {
      const { id } = req.params;
      let result = await RestaurantService().getRestaurantById(id);
      if (!result) return res.status(500).send([]);
      let count = await ReviewService().getCountReviewByRestaurantId(result.id);
      let rating = await RestaurantService().getRating(result.id);
      result["countReview"] = count;
      result["rating"] = rating;
      let data = [];
      data = await ReviewService().getReviewByRestaurantId(result.id);
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          let user = await UserService().getUserById(data[i].idAccount);
          data[i]["name"] = user.name;
          data[i]["profilePic"] = user.profilePic;
        }
        data = data.map((arr, index) => ({
          name: arr.name,
          profilePic: arr.profilePic,
          description: arr.description,
          rating: arr.rating,
          createdAt: arr.createdAt,
          updatedAt: arr.updatedAt,
        }));
        result["review"] = data;
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  editRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, category, location, openHour, contact } = req.body;
      const result = await RestaurantService().updateRestaurantById(
        id,
        name,
        category,
        location,
        openHour,
        contact
      );
      if (result === 0)
        return res.status(400).send({
          message: "Restoran tidak ditemukan. Restoran gagal diperbarui",
        });
      if (result === 1)
        return res.status(200).send({
          message: "Restoran berhasil diperbarui",
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await RestaurantService().deleteRestaurantById(id);
      if (result === 0)
        return res.status(400).send({
          message: "Restoran tidak ditemukan. Restoran gagal dihapus",
        });
      if (result === 1)
        return res.status(200).send({
          message: "Restoran berhasil dihapus",
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postRestaurant: async (req, res) => {
    try {
      const { name, category } = req.body;
      const result = await RestaurantService().createRestaurant(name, category);
      if (result === 0) {
        return res.status(400).send({
          message: "Harap isi nama dan kategori",
        });
      }
      if (result === 1) {
        return res.status(400).send("Restoran telah diisi nama yang sama");
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
