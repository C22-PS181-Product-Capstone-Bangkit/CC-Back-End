const RestaurantService = require("../services/Restaurant.service");

module.exports = {
  getRestaurant: async (req, res) => {
    try {
      const result = await RestaurantService().getRestaurant();
      if (!result) res.status(500).send({ message: "Tidak ada data restoran" });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getRestaurantDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await RestaurantService().getRestaurantById(id);
      if (!result) res.status(500).send({ message: "Tidak ada data restoran" });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getRestaurantCategory: async (req, res) => {},
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
        res.status(400).send({
          message: "Restoran tidak ditemukan. Restoran gagal diperbarui",
        });
      if (result === 1)
        res.status(200).send({
          message: "Restoran berhasil diperbarui",
        });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await RestaurantService().deleteRestaurantById(id);
      if (result === 0)
        res.status(400).send({
          message: "Restoran tidak ditemukan. Restoran gagal dihapus",
        });
      if (result === 1)
        res.status(200).send({
          message: "Restoran berhasil diperbarui",
        });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  postRestaurant: async (req, res) => {
    try {
      const { name, category } = req.body;
      const result = await RestaurantService().createRestaurant(name, category);
      if (result === 0) {
        res.status(400).send({
          message: "Harap isi nama dan kategori",
        });
      }
      if (result === 1) {
        res.status(400).send("Restoran telah diisi nama yang sama");
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
