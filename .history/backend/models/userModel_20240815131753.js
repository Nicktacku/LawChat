import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
  },
  group_chats: {
    type: [{ type: String, required: true }],
  },
  friends: {
    type: Array,
  },
});

export const User = mongoose.model("User", userSchema);
