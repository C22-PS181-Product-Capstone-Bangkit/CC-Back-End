const HistoryService = require("../services/History.service");

module.exports = {
  getHistory: async (req, res) => {
    try {
      const result = await HistoryService().getHistory();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  getHistoryDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await HistoryService().getHistoryById(id);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  editHistory: async (req, res) => {
    try {
      const { user } = req;
      const { idRestaurant } = req.params;
      const result = await HistoryService().updateHistoryById(
        id,
        user.id,
        idRestaurant
      );
      if (result === 0)
        return res.status(404).send({
          error: true,
          message: "History Not Found",
        });
      if (result === 1) {
        return res.status(201).send({
          error: false,
          message: "Success Edit History",
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
        return res.status(404).send({
          error: true,
          message: "History Not Found",
        });
      if (result === 1) {
        return res.status(200).send({
          error: false,
          message: "Success Delete History",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postHistory: async (req, res) => {
    try {
      const { user } = req;
      const { idRestaurant } = req.body;
      const result = await HistoryService().createHistory(
        user.id,
        idRestaurant
      );
      return res.status(201).send(result);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
