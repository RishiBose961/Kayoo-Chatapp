import expressAsyncHandler from "express-async-handler";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverScoketId, io } from "../socket/socket.js";

export const sendMessage = expressAsyncHandler(async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });


    if (!message || !conversationId) {
      return res.status(500).json({ message: "Please Fill All Fields" });
    }

    const newMessage = new Message({
      senderId,
      conversationId,
      receiverId,
      message,
    });

    await newMessage.save();

    const receiverScoketId = getReceiverScoketId(receiverId);
    if (receiverScoketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverScoketId).emit("newMessage", newMessage);
    }

    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const getMessage = expressAsyncHandler(async (req, res) => {
  try {
    const message = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
});

export const deleteMessage = expressAsyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const message = await Message.findById(req.params.conversationId);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    if (message.senderId.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "You can only delete your own messages" });
    }

   const delte=  await Message.findByIdAndDelete(req.params.conversationId);
    
    const receiverScoketId = getReceiverScoketId(message.receiverId);
    if (receiverScoketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverScoketId).emit("newMessage", delte);
    }

   

    res.status(200).json({delte, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
