const express = require("express");
const router = express.Router();
const productController = require("../domain/product/controller/product_controller");

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);

module.exports = router;
