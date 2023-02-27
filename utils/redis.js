const redisClient = require("../config/redis");

const getCache = (key) => {
  const response = redisClient.get(key);
  return response;
};

const setCache = async (key, value) => {
  await redisClient.set(key, value);
};

module.exports = {
  getCache,
  setCache,
};
