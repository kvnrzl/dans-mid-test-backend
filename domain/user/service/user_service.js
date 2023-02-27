const userRepo = require("../repository/user_repo");
const jwtUtil = require("../../../utils/jwt");
const bcryptUtil = require("../../../utils/bcrypt");

// register
const register = async (params) => {
  try {
    var { name, email, password } = params;

    const userExists = await userRepo.checkIfExists({ email });
    if (userExists) {
      return null;
    }

    password = bcryptUtil.hashPassword(password);
    const user = await userRepo.createUser({ name, email, password });
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    return error;
  }
};

// login
const login = async (params) => {
  try {
    const user = await userRepo.readUser(params);
    if (user) {
      const token = jwtUtil.generateToken({
        id: user.id,
        name: user.name,
        email: user.email,
      });
      return token;
    }
    return null;
  } catch (error) {
    return error;
  }
};

module.exports = {
  register,
  login,
};
