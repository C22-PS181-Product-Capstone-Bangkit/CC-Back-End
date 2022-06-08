const express = require('express');
const restaurantController = require('../controllers/Restaurant.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/", restaurantController.getRestaurant);
router.get("/recommendation", validateToken ,restaurantController.getRecommendation);
router.post("/list-restaurant", restaurantController.getListRestaurant);
router.get("/:id", restaurantController.getRestaurantDetail);
router.delete("/:id", validateToken, restaurantController.deleteRestaurant);
router.put("/:id", validateToken, restaurantController.editRestaurant);
router.post("/", validateToken, restaurantController.postRestaurant);

module.exports = router;