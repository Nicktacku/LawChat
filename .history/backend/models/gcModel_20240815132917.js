import mongoose from "mongoose";

const gcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [{ type: String, required: true }],
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
});

export const Gc = mongoose.model("Gc", gcSchema);
