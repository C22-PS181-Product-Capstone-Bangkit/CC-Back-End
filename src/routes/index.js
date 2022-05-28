const router = require("express").Router();
router.use("/", require("./User.routes"));
router.use("/review", require("./Review.routes"));
router.use("/restaurant", require("./Restaurant.routes"));
router.use("/food", require("./Food.routes"));

module.exports = router;
