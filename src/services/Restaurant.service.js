const { nanoid } = require("nanoid");
const db = require("../models");
const Restaurant = db.Restaurant;

const RestaurantService = () => {
  const getRestaurant = async (req, res) => {
    const restaurant = await Restaurant.findAll();
    if (!restaurant) {
      return 0;
    }
    return restaurant;
  };
  const getRestaurantById = async (req, res) => {

  };
  const getRestaurantByCategory= async (req, res) => {

  };
  const editRestaurant = async (req, res) => {

  };
  const deleteRestaurant = async (req, res) => {

  };
  const postRestaurant = async (req, res) => {

  };
  return {
      getRestaurant,
      getRestaurantById,
      getRestaurantByCategory,
      editRestaurant,
      deleteRestaurant,
      postRestaurant
  }
};

module.exports = RestaurantService;
