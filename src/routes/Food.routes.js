const express = require('express');
const foodController = require('../controllers/Food.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/", foodController.getFood);
router.get("/:id", foodController.getFoodDetail);
router.delete("/:id", validateToken, foodController.deleteFood);
router.put("/:id", validateToken, foodController.editFood);
router.post("/", validateToken, foodController.postFood);

module.exports = router;