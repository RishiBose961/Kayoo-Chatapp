import express from "express";
const router = express.Router();
import { createConversation,getConversation,allChatUser } from "../controller/conversation.controller.js";
import { protect } from "../middleware/authMiddleware.js";
import { loginRateLimit } from "../utils/ratelimiter.js";

router.route("/conn").post(createConversation);
router.route("/conn/:userId").get(getConversation);
router.route("/search").get(allChatUser);
export default router;
