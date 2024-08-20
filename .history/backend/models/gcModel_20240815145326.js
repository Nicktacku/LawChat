import mongoose from "mongoose";
import { Chat } from "./chatModels.js";

const gcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: User }],
    required: true,
  },
  group_image: {
    type: String,
    required: true,
  },
  last_chat: {
    type: String,
    required: true,
  },
  nicknames: {
    type: [{ type: String, required: true }],
    required: true,
  },
  last_chat_time: {
    type: String,
    required: true,
  },
  chats: {
    type: [chatSchema],
  },
});

export const Gc = mongoose.model("Gc", gcSchema);
