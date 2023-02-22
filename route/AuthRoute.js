import express from "express";
import { Login, logOut, Register } from "../controllers/AuthController.js";
import { verifyUser } from "../middleware/auth.js";
const router = express.Router();

router.post("/api/login", Login);
router.delete("/api/logout", logOut);
router.post("/api/register", Register);

export default router;
