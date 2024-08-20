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
    type: [{ type: String, required: true }],
  },
  group_chats: {
    type: [{ type: String, required: true }],
  },
  friends: {
    type: [{ type: String, required: true }],
  },
});

export const User = mongoose.model("User", userSchema);
module.exports = User;
