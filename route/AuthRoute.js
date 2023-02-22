import express from "express";
import { Login, logOut, Me, Register } from "../controllers/AuthController.js";
import { verifyUser } from "../middleware/auth.js";
const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", logOut);
router.post("/register", Register);

export default router;
