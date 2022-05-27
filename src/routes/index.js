const router = require("express").Router();
router.use("/", require("./User.routes"));

module.exports = router;
