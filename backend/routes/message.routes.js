import express  from "express";
import {sendMessage,getMessage,deleteMessage} from '../controller/message.controller.js'
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/sendm/:id").post(protect,sendMessage);
router.route("/:conversationId").get(protect,getMessage);
router.route("/del/:conversationId").delete(protect,deleteMessage);

export default router;

