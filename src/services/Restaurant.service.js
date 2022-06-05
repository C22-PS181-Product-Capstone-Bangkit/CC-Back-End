const { nanoid } = require("nanoid");
const db = require("../models");
const { Op } = require("sequelize");
const Fuse = require("fuse.js");
const Restaurant = db.Restaurant;
const Review = db.Review;

const RestaurantService = () => {
  const getRestaurant = async () => {
    const restaurant = await Restaurant.findAll({ raw: true });
    if (!restaurant) {
      return [];
    }
    return restaurant;
  };
  const getRestaurantById = async (id) => {
    const restaurant = await Restaurant.findOne({ where: { id }, raw: true });
    if (!restaurant) {
      return [];
    }
    return restaurant;
  };

  const getRestaurantByCategory = async (category) => {
    const restaurant = await Restaurant.findAll({
      where: {
        category: {
          [Op.like]: `%${category}%`,
        },
      },
      raw: true,
    });
    if (restaurant.length === 0) {
      return [];
    }
    return restaurant;
  };

  const getRestaurantByName = async (q) => {
    const restaurant = await Restaurant.findAll({ raw: true });
    if (restaurant.length === 0) {
      return [];
    }
    const fuse = new Fuse(restaurant, {
      includeScore: true,
      keys: ["name"],
    });
    let result = []
    result = fuse.search(q);
    if(result.length > 0) {
      result = result.map((arr, index) => (
        arr.item
      ))
    }
    return result;
  };

  const updateRestaurantById = async (
    id,
    name,
    category,
    location,
    openHour,
    contact
  ) => {
    const result = await Restaurant.update(
      { name, category, location, openHour, contact },
      { where: { id } }
    );
    return result[0];
  };

  const getRating = async (id) => {
    const result = await Review.findAll({
      where: { idRestaurant: id },
      attributes: ["rating"],
      raw: true,
    });
    let rate = 0;
    for (let i = 0; i < result.length; i++) {
      rate += result[i].rating;
    }
    return rate / result.length;
  };

  const deleteRestaurantById = async (id) => {
    //TODO: setelah sudah terbentuk data-data history, likes, review
    // const err1 = await Review.destroy({ where: { idRestaurant: id } });
    // const err2 = await Food.destroy({ where: { id } });
    const result = await Restaurant.destroy({ where: { id } });
    return result;
  };

  const createRestaurant = async (name, category) => {
    const restaurant = await getRestaurant();
    if (!name || !category) {
      return 0;
    }
    if (restaurant) {
      const isRegistrate = await Restaurant.findOne({
        where: { name },
      });
      if (isRegistrate) return 1;
    }
    const result = await Restaurant.create({
      id: `resto-${nanoid(20)}`,
      name: name,
      category: category,
      photoPlaces: null,
      rating: 0.0,
      openHour: null,
      contact: null,
    });
    return result;
  };

  return {
    getRestaurant,
    getRestaurantById,
    getRestaurantByCategory,
    getRestaurantByName,
    getRating,
    updateRestaurantById,
    deleteRestaurantById,
    createRestaurant,
  };
};

module.exports = RestaurantService;
