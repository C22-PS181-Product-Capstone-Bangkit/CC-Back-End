const express = require('express');
const userController = require('../controllers/User.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/auth/token", validateToken, userController.authToken);
router.get("/profile", validateToken, userController.profile);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.put("/reset-password", validateToken, userController.resetPassword);
router.put("/edit-profile", validateToken, userController.editProfile);

module.exports = router;