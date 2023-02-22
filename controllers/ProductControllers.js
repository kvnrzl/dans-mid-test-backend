import { get, set } from "../redis/redisCache.js";
import axios from "axios";

const redisKey = "products";

export const listProducts = async (req, res) => {
  let productData;
  try {
    productData = await get(redisKey);
    if (productData == undefined || productData == null) {
      const url = "https://dummyjson.com/products";
      const response = await axios.get(url);
      productData = response.data;
      await set(redisKey, JSON.stringify(productData));
      console.log(`Data set to Redis`);
      if (!response) {
        return res.status(404).send({
          error: "terdapat kesalahan data",
        });
      }
    }

    if (productData != undefined) {
      try {
        productData = await get(redisKey);
        if (productData) {
          productData = JSON.parse(productData);
          return res.status(200).send({
            data: productData,
          });
        }
      } catch (error) {
        console.error("Error while retrieving data from Redis", error);
        return res.status(500).send({
          error: "Error while retrieving data from Redis",
        });
      }
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error while parsing JSON", error);
      return res.status(500).send({
        error: "Error while parsing JSON",
      });
    }

    console.error("Error while retrieving data from Redis", error);
    return res.status(500).send({
      error: "Error while retrieving data from Redis",
    });
  }
  req.productData = productData;
};

export const detailProducts = async (req, res) => {
  const productId = req.params.productID;
  const redisKey = `products:${productId}`;
  let productData;
  try {
    productData = await get(redisKey);
    if (productData == undefined || productData == null) {
      const url = `https://dummyjson.com/products/${productId}`;
      const response = await axios.get(url);
      productData = response.data;
      await set(redisKey, JSON.stringify(productData));
      console.log(`Data set to Redis`);
      if (!response) {
        return res.status(404).send({
          error: "terdapat kesalahan data",
        });
      }
    }

    if (productData != undefined) {
      try {
        productData = await get(redisKey);
        if (productData) {
          productData = JSON.parse(productData);
          return res.status(200).send({
            data: productData,
          });
        }
      } catch (error) {
        console.error("Error while retrieving data from Redis", error);
        return res.status(500).send({
          error: "Error while retrieving data from Redis",
        });
      }
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error while parsing JSON", error);
      return res.status(500).send({
        error: "Error while parsing JSON",
      });
    }

    console.error("Error while retrieving data from Redis", error);
    return res.status(500).send({
      error: "Error while retrieving data from Redis",
    });
  }
  req.productData = productData;
};
