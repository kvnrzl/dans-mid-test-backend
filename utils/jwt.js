const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign(payload, "hahaha", {
    issuer: "test",
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, "hahaha");
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
