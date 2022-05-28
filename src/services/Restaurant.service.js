const { nanoid } = require("nanoid");
const db = require("../models");
const Restaurant = db.Restaurant;
const Review = db.Review;
const Food = db.Food;

const RestaurantService = () => {
  const getRestaurant = async () => {
    const restaurant = await Restaurant.findAll();
    if (!restaurant) {
      return 0;
    }
    return restaurant;
  };
  const getRestaurantById = async (id) => {
    const restaurant = await Restaurant.findOne({ where: { id } });
    if (!restaurant) {
      return 0;
    }
    return restaurant;
  };

  const getRestaurantByCategory = async (category) => {
    const restaurant = await Restaurant.findAll();

    //nanti cari data difetch semua terus baru sorting nya di sini aja
    if (!restaurant) {
      return 0;
    }
    return restaurant;
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

  const updateRating = async (id) => {
    const result = await Review.findAll({
      where: { idRestaurant: id },
      attributes : ['rating'],
      raw : true
    });
    let rate = 0;
    for(let i=0; i < result.length; i++) {
      rate += result[i].rating;
    }
    await Restaurant.update({ rating: rate / result.length }, { where: { id } });
  };

  const deleteRestaurantById = async (id) => {
    //TODO: setelah sudah terbentuk data-data history, likes, review, dan food
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
    updateRating,
    updateRestaurantById,
    deleteRestaurantById,
    createRestaurant,
  };
};

module.exports = RestaurantService;
