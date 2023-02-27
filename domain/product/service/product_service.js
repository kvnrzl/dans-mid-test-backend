const productRepo = require("../repository/product_repo");

const getProduct = async (id) => {
  const params = id ? `/${id}` : "/";
  const key = id ? `product-${id}` : "product";

  try {
    const response = await productRepo.getProductFromCache(key);
    if (response) {
      return JSON.parse(response);
    } else {
      const response = await productRepo.getProductFromAPI(params);
      await productRepo.saveProductToCache(key, response);
      return response;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  getProduct,
};
