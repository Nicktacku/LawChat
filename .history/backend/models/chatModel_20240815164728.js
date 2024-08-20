import mongoose from "mongoose";
import { User } from "./userModel.js";

const chatSchema = new mongoose.Schema();

export const Chat = mongoose.model("Chat", chatSchema);
