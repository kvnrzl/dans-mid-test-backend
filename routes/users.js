var express = require("express");
var router = express.Router();
const userController = require("../domain/user/controller/user_controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", userController.register);
router.get("/login", userController.login);

module.exports = router;
