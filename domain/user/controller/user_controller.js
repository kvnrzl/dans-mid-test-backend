const userService = require("../service/user_service");
const cookie = require("cookie");

const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    if (!user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error, " <<<<<<< error");
    return res.status(500).json({
      message: "Something went wrong",
      data: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    if (!token) {
      return res.status(400).json({
        message: "username or password is incorrect",
      });
    }

    // set cookie di header
    const setCookie = cookie.serialize("token", token, {
      httpOnly: true,
      path: "/",
    });
    res.setHeader("Set-Cookie", setCookie);

    return res.status(200).json({
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "username or password is incorrect",
      data: error,
    });
  }
};

module.exports = {
  register,
  login,
};
