import express from "express";
import { detailProducts, listProducts, } from "../redis/productChace.js";


const router = express.Router();

router.get('/products', listProducts);
router.get('/products/:productID', detailProducts);


export default router;