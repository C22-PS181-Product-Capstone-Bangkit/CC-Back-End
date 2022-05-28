const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    if (req.headers && req.headers["authorization"]) {
      const token = req.headers["authorization"].split("Bearer ")[1].trim();
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      return next();
    }
    return res.status(403).send({
      message: "Unauthorized",
      data: "Headers authorization not found",
    });
  } catch (error) {
    return res.status(403).send({
      message: "Unauthorized",
      data: error.toString(),
    });
  }
};

module.exports = validateToken;
