const { nanoid } = require("nanoid");
const db = require("../models");
const History = db.History;

const HistoryService = () => {
  const createHistory = async (idAccount, idRestaurant, title) => {
    const result = await History.create({
      id: `History-${nanoid(22)}`,
      idRestaurant: idRestaurant,
      idAccount: idAccount,
      title: title,
    });
    return result;
  };

  const updateHistoryById = async (id, idAccount, title) => {
    const result = await History.update(
      { title },
      { where: { id, idAccount } }
    );
    return result[0];
  };

  const deleteHistoryById = async (id) => {
    const result = await History.destroy({ where: { id } });
    return result;
  };

  const getHistory = async () => {
    const history = await History.findAll();
    if (history.length === 0) {
      return 0;
    }
    return history;
  };

  const getHistoryById = async (id) => {
    const history = await History.findOne({ where: { id } });
    if (!history) {
      return 0;
    }
    return history;
  };

  const getHistoryByUserId = async (idAccount) => {
    const history = await History.findAll({ where: { idAccount } });
    if (!history) {
      return [];
    }
    return history;
  };

  return {
    createHistory,
    updateHistoryById,
    deleteHistoryById,
    getHistory,
    getHistoryById,
    getHistoryByUserId,
  };
};

module.exports = HistoryService;
