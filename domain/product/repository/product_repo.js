const axios = require("axios");
const redisUtil = require("../../../utils/redis");
// const axiosInstance = require("../../../config/axios");

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/products",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const getProductFromAPI = async (params) => {
  try {
    const response = await axiosInstance.get(params);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getProductFromCache = async (key) => {
  try {
    const response = await redisUtil.getCache(key);
    return response;
  } catch (error) {
    return error;
  }
};

const saveProductToCache = async (key, response) => {
  try {
    await redisUtil.setCache(key, JSON.stringify(response));
  } catch (error) {
    return error;
  }
};

module.exports = {
  getProductFromAPI,
  getProductFromCache,
  saveProductToCache,
};
