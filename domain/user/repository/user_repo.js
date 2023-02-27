const userModel = require("../../../models/user");
const bcryptUtil = require("../../../utils/bcrypt");

// create
const createUser = async (params) => {
  try {
    var { name, email, password } = params;
    const user = await userModel.create({
      name,
      email,
      password,
    });
    return user;
  } catch (error) {
    return error;
  }
};

// read
const readUser = async (params) => {
  try {
    const { email, password } = params;
    const user = await userModel.findOne({
      where: {
        email,
      },
    });
    if (user) {
      // console.log(
      //   bcryptUtil.comparePassword(password, user.password),
      //   " <<<<<<< compare password"
      // );
      if (bcryptUtil.comparePassword(password, user.password)) {
        return user;
      }
    }
    return null;
  } catch (error) {
    return error;
  }
};

const checkIfExists = async (params) => {
  try {
    const { email } = params;
    const user = await userModel.findOne({
      where: {
        email,
      },
    });
    return user ? true : false;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  readUser,
  checkIfExists,
};
