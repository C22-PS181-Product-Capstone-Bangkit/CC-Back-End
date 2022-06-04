const { nanoid } = require("nanoid");
const db = require("../models");
const History = db.History;

const HistoryService = () => {
  const createHistory = async (idAccount, idRestaurant) => {
    const result = await History.create({
      id: `History-${nanoid(22)}`,
      idRestaurant: idRestaurant,
      idAccount: idAccount,
    });
    return result;
  };

  const updateHistoryById = async (id, idAccount, idRestaurant) => {
    const result = await History.update(
      { idRestaurant },
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
      return [];
    }
    return history;
  };

  const getHistoryById = async (id) => {
    const history = await History.findOne({ where: { id } });
    if (!history) {
      return [];
    }
    return history;
  };

  const getHistoryByUserId = async (idAccount) => {
    const history = await History.findAll({ where: { idAccount }, raw : true });
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
