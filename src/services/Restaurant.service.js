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

  const deleteRestaurantById = async (id) => {
    //TODO: setelah sudah terbentuk data-data history, likes, review, dan food
    // const err1 = await Review.destroy({ where: { idRestaurant: id } });
    // const err2 = await Food.destroy({ where: { id } });
    const result = await Restaurant.destroy({ where: { id } });
    return result;
  };

  const createRestaurant = async () => {
    if (!email || !name || !password) {
      return 0;
    }
    const isRegistrate = await Restaurant.findOne({ where: { name } });
    if (isRegistrate) {
      return 1;
    }
    const result = await Review.create({
      id: `review-${nanoid(10)}`,
      idRestaurant: idRestaurant,
      idAccount: idAccount,
      subject: subject,
      description: description,
      rating: rating,
    });
    return result;
  };
  return {
    getRestaurant,
    getRestaurantById,
    getRestaurantByCategory,
    updateRestaurantById,
    deleteRestaurantById,
    createRestaurant,
  };
};

module.exports = RestaurantService;
