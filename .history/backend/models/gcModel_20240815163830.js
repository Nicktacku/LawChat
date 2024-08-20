import mongoose from "mongoose";
import { Chat, chatSchema } from "./chatModel.js";

const gcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    ],
    required: true,
  },
  group_image: {
    type: String,
  },
  last_chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  nicknames: {
    type: [{ type: String, required: true }],
  },
  last_chat_time: {
    type: String,
  },
  chats: {
    type: [chatSchema],
  },
});

export const Gc = mongoose.model("Gc", gcSchema);
