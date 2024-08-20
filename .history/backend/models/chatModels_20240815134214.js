import mongoose from "mongoose";

chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
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
