import mongoose from "mongoose";
import { User } from "./userModels.js";

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  time: {
    type: String,
    required: true,
  },
  is_owner: {
    type: Boolean,
    required: true,
  },
});

export const Chat = mongoose.model("Chat", chatSchema);
