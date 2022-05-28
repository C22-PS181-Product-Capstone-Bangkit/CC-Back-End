const router = require("express").Router();
router.use("/", require("./User.routes"));
router.use("/review", require("./Review.routes"));

module.exports = router;
