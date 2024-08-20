import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    required: false,
  },
  group_chats: {
    type: Array,
    required: false,
  },
  friends: {
    type: Array,
    required: false,
  },
});

export default const User = mongoose.model("User", userSchema);
