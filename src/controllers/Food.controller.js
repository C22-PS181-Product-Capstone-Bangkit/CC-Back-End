const FoodService = require("../services/Food.service");

module.exports = {
  getFood: async (req, res) => {
    try {
      const result = await FoodService().getFood();
      if (!result) return res.status(500).send({ message: "Tidak ada data makanan" });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getFoodDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await FoodService().getFoodById(id);
      if (!result) return res.status(500).send({ message: "Tidak ada data makanan" });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  editFood: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const result = await FoodService().updateFoodById(id, name, price);
      if (result === 0)
        return res.status(400).send({
          message: "Makanan tidak ditemukan. Makanan gagal diperbarui",
        });
      if (result === 1)
        return res.status(200).send({
          message: "Makanan berhasil diperbarui",
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  deleteFood: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await FoodService().deleteFoodById(id);
      if (result === 0)
        return res.status(400).send({
          message: "Makanan tidak ditemukan. Makanan gagal dihapus",
        });
      if (result === 1)
        return res.status(200).send({
          message: "Makanan berhasil dihapus",
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postFood: async (req, res) => {
    try {
      const { name, price, idRestaurant } = req.body;
      const result = await FoodService().createFood(name, price, idRestaurant);
      if (result === 0) {
        return res.status(400).send({
          message: "Harap isi nama dan harga",
        });
      }
      if (result === 1) {
        return res.status(400).send("Makanan telah diisi nama yang sama");
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
