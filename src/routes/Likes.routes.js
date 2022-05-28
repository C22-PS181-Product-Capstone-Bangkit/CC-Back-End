const express = require('express');
const likesController = require('../controllers/likes.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/", likesController.getLikes);
router.get("/:id", likesController.getLikesDetail);
router.delete("/:id", validateToken, likesController.deleteLikes);
router.put("/:id", validateToken, likesController.editLikes);
router.post("/", validateToken, likesController.postLikes);

module.exports = router;