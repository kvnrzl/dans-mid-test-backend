import express from "express";
import {
  detailProducts,
  listProducts,
} from "../controllers/ProductControllers.js";

const router = express.Router();

router.get("/api/products", listProducts);
router.get("/api/products/:productID", detailProducts);

export default router;
