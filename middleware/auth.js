const jwtUtil = require("../utils/jwt");
const cookie = require("cookie");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = cookie.parse(req.headers.cookie || "").token;
  // console.log(token, " <<<<<<< token");
  if (!token) {
    return res.status(401).json({
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwtUtil.verifyToken(token, process.env.JWT_SECRET);
    // console.log(decoded, " <<<<<<< decoded");
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token is not valid",
    });
  }
};

module.exports = auth;
