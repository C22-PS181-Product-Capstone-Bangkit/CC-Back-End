const express = require("express");
const userController = require("../controllers/User.controller");
const validateToken = require("../libraries/Auth");
const router = express.Router();
const multer = require("multer");

const multerInit = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 4 * 1024 * 1024, //limit 4 mb
  },
});

router.get("/auth/token", validateToken, userController.authToken);
router.get("/profile", validateToken, userController.profile);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.put("/reset-password", validateToken, userController.resetPassword);
router.put("/edit-profile", validateToken, userController.editProfile);
router.post("/upload-pic", validateToken, multerInit.single("file"), userController.uploadPic);

module.exports = router;
