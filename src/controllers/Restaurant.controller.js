const fetch = require("node-fetch");
const RestaurantService = require("../services/Restaurant.service");
const ReviewService = require("../services/Review.service");
const UserService = require("../services/User.service");

const postRating = async (rating) => {
  const response = await fetch(
    "https://machine-learning-cemil.herokuapp.com/predict",
    {
      method: "POST",
      body: JSON.stringify({
        user_ratings: rating,
      }),
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = response.json();
  return data;
};

module.exports = {
  getRestaurant: async (req, res) => {
    try {
      const { category, q } = req.query;
      let result = category
        ? await RestaurantService().getRestaurantByCategory(category)
        : q
        ? await RestaurantService().getRestaurantByName(q)
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
      if (!result) return res.status(200).send([]);
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
        return res.status(404).send({
          error: true,
          message: "Restoran tidak ditemukan. Restoran gagal diperbarui",
        });
      if (result === 1)
        return res.status(201).send({
          error: false,
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
          error: true,
          message: "Restoran tidak ditemukan. Restoran gagal dihapus",
        });
      if (result === 1)
        return res.status(200).send({
          error: false,
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
          error: true,
          message: "Harap isi nama dan kategori",
        });
      }
      if (result === 1) {
        return res.status(400).send({
          error: true,
          message: "Restoran telah diisi nama yang sama",
        });
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getRecommendation: async (req, res) => {
    try {
      const { user } = req;
      const userData = await UserService().getUserById(user.id);
      if (!userData) {
        return res.status(404).send({ 
          error : true,
          message: "Data User tidak ditemukan" 
        });
      }
      //Restaurant
      const restaurant = await RestaurantService().getRestaurant();

      //Review User sorted id Restaurant
      let review = [];
      review = await ReviewService().getReviewByUserId(user.id);
      review.sort(
        (a, b) =>
          parseInt(a.idRestaurant.substring(6)) -
          parseInt(b.idRestaurant.substring(6))
      );

      //Rating User
      let rating = [];

      let checked = -1;
      for (let i = 0; i < restaurant.length; i++) {
        const check = review.find(
          (data) => data.idRestaurant === restaurant[i].id
        );
        if (check) {
          checked++;
          rating.push(review[checked].rating);
        } else {
          rating.push(0);
        }
      }

      //Debug
      console.log(rating);

      const data = await postRating(rating);
      let result = [];

      for (let i = 0; i < restaurant.length; i++) {
        result.push(
          restaurant.find(
            (arr, index) =>
              parseInt(arr.id.substring(6) - 1) === data.sorted_list[i]
          )
        );
      }

      for (let i = 0; i < result.length; i++) {
        let count = await ReviewService().getCountReviewByRestaurantId(
          result[i].id
        );
        let rating = await RestaurantService().getRating(result[i].id);
        result[i]["countReview"] = count;
        result[i]["rating"] = rating;
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  getListRestaurant: async (req, res) => {
    try {
      const { idRestaurants } = req.body;
      if (Array.isArray(idRestaurants)) {
        let result = [];
        for (let i = 0; i < idRestaurants.length; i++) {
          const data = await RestaurantService().getRestaurantById(
            idRestaurants[i]
          );
          result.push(data);
        }
        for (let i = 0; i < result.length; i++) {
          let count = await ReviewService().getCountReviewByRestaurantId(
            result[i].id
          );
          let rating = await RestaurantService().getRating(result[i].id);
          result[i]["countReview"] = count;
          result[i]["rating"] = rating;
        }
        return res.status(200).send(result);
      } else {
        return res.status(200).send([]);
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
