const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    issuer: process.env.APP_NAME,
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
