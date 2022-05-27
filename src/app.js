require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const { sendEmail } = require("./libraries/Email");
const { PORT = 3000 } = process.env;
const routerApi = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", routerApi);

// const subject = "Welcome Cemil";
// const texting = `<div>
// <h1 style="text-align:center;">Selamat datang Juan,</h1>
// <p>Terima kasih telah mendaftar di Cemil: Choose your meal</p>
// </div>
// `;
// sendEmail("juanpatrix2000@gmail.com", subject, texting);

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
