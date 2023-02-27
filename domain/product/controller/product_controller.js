const productService = require("../service/product_service");

const getProduct = async (req, res) => {
  try {
    const response = await productService.getProduct();
    res.status(200).json({
      message: "Success get product",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productService.getProduct(id);
    res.status(200).json({
      message: "Success get product by id",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

module.exports = {
  getProduct,
  getProductById,
};
