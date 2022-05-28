const { nanoid } = require("nanoid");
const db = require("../models");
const { Op } = require("sequelize");
const Food = db.Food;
const Restaurant = db.Restaurant;

const FoodService = () => {
  const getFood = async () => {
    const food = await Food.findAll();
    if (food.length === 0) {
      return 0;
    }
    return food;
  };
  const getFoodById = async (id) => {
    const food = await Food.findOne({ where: { id } });
    if (!food) {
      return 0;
    }
    return food;
  };

  const getFoodByIdRestaurant = async (id) => {
    const food = await Food.findAll({ where: { idRestaurant: id } });
    if (food.length === 0) {
      return 0;
    }
    return food;
  };

  const updateFoodById = async (id, title, price) => {
    const result = await Food.update({ title, price }, { where: { id } });
    return result[0];
  };

  const deleteFoodById = async (id) => {
    const result = await Food.destroy({ where: { id } });
    return result;
  };

  const createFood = async (name, price, idRestaurant) => {
    const food = await getFood();
    if (!name || !price) {
      return 0;
    }
    if (food) {
      const isRegistrate = await Food.findOne({
        where: { title : name },
      });
      if (isRegistrate) return 1;
    }
    const result = await Food.create({
      id: `food-${nanoid(25)}`,
      idRestaurant : idRestaurant,
      title: name,
      price: price
    });
    return result;
  };

  return {
    getFood,
    getFoodById,
    getFoodByIdRestaurant,
    updateFoodById,
    deleteFoodById,
    createFood,
  };
};

module.exports = FoodService;
