import expressAsyncHandler from "express-async-handler";
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";



export const createConversation = expressAsyncHandler(async (req, res) => {
  const newConversation = new Conversation({
    participants: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
});


export const getConversation = expressAsyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.find({
      participants: { $in: [req.params.userId] }
    }).sort({ createdAt: -1 });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

export const allChatUser = expressAsyncHandler(async (req, res) => {
  const userId = req.query.userId;
  const name = req.query.name;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ name: name });
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
