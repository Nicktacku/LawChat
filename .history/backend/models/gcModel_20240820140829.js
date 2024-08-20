import mongoose from "mongoose";

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
    type: String,
  },
  nicknames: {
    type: [{ type: String, required: true }],
  },
  last_chat_time: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Chat,
  },
  chats: {
    type: [
      {
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
      },
    ],
  },
});

export const Gc = mongoose.model("Gc", gcSchema);
