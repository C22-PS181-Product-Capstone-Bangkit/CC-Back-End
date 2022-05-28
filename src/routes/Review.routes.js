const express = require('express');
const reviewController = require('../controllers/Review.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/", reviewController.getReviewAll);
router.get("/:id", reviewController.getReviewDetail);
router.delete("/:id", validateToken, reviewController.deleteReview);
router.put("/:id", validateToken, reviewController.editReview);
router.post("/", validateToken, reviewController.postReview);

module.exports = router;