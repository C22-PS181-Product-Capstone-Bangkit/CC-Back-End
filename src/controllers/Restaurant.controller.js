const RestaurantService = require("../services/Restaurant.service");

module.exports = {
  getRestaurant: async (req, res) => {
    try {
      const result = await RestaurantService().getRestaurant();
      if (!result) res.status(500).send("Tidak ada data restoran");
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getRestaurantDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await RestaurantService().getRestaurantById(id);
      if (!result) res.status(500).send("Tidak ada data restoran");
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getRestaurantCategory: async (req, res) => {},
  editRestaurant: async (req, res) => {},
  deleteRestaurant: async (req, res) => {},
  postRestaurant: async (req, res) => {},
};
