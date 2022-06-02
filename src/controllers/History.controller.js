const HistoryService = require("../services/History.service");

module.exports = {
  getHistory: async (req, res) => {
    try {
      const result = await HistoryService().getHistory();
      if (!result) return res.status(500).send({ message: "Tidak ada data History" });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getHistoryDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await HistoryService().getHistoryById(id);
      if (!result)
        return res.status(500).send({ message: "Data History tidak ditemukan" });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  editHistory: async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const { title } = req.body;
      const result = await HistoryService().updateHistoryById(
        id,
        user.id,
        title
      );
      if (result === 0)
        return res.status(400).send({
          message: "History tidak ditemukan. History gagal diperbarui",
        });
      if (result === 1) {
        return res.status(200).send({
          message: "History berhasil diperbarui",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  deleteHistory: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await HistoryService().deleteHistoryById(id);
      if (result === 0)
        return res.status(400).send({
          message: "History tidak ditemukan. History gagal dihapus",
        });
      if (result === 1) {
        return res.status(200).send({
          message: "History berhasil dihapus",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postHistory: async (req, res) => {
    try {
      const { user } = req;
      const { idRestaurant, title } = req.body;
      const result = await HistoryService().createHistory(
        user.id,
        idRestaurant,
        title
      );
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
