import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});

app.post("/register", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.profile_picture ||
      !req.body.group_chats ||
      !req.body.friends
    ) {
      return res.status(400).send({
        message: "send all required fields",
      });
    }
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      profile_picture: request.body.profile_picture,
      group_chats: request.body.group_chats,
      friends: request.body.friends,
    };
  } catch (error) {
    console.log(message.error);
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(MongoDBURL).then(() => {
  console.log("connected to database");
  app.listen(PORT, () => {
    console.log(`app is listening to port: ${PORT}`);
  });
});
