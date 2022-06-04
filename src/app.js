require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const { PORT = 3000 } = process.env;
const routerApi = require("./routes/index");
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", routerApi);

app.use(passport.initialize());

const multerInit = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 4 * 1024 * 1024, //limit 4 mb
  },
})
app.use(multerInit.single('file'));

// 404
app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

// 500
app.use(function (err, req, res, next) {
  if (err) {
    console.error(err.stack);
  }
  res.status(500).send("Something broke! Check console");
});

app.listen(PORT, function () {
  console.log(`App running on http://localhost:${PORT}`);
});
