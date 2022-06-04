const express = require('express');
const restaurantController = require('../controllers/Restaurant.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/", restaurantController.getRestaurant);
router.get("/:id", restaurantController.getRestaurantDetail);
router.delete("/:id", validateToken, restaurantController.deleteRestaurant);
router.put("/:id", validateToken, restaurantController.editRestaurant);
router.post("/", validateToken, restaurantController.postRestaurant);

module.exports = router;