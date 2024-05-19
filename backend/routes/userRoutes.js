import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";
import { loginRateLimit } from "../utils/ratelimiter.js";

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect,loginRateLimit, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
