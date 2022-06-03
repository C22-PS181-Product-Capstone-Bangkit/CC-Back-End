const router = require("express").Router();
router.use("/", require("./User.routes"));
router.use("/review", require("./Review.routes"));
router.use("/restaurant", require("./Restaurant.routes"));
router.use("/favorite", require("./Likes.routes"));
router.use("/history", require("./History.routes"));

module.exports = router;
