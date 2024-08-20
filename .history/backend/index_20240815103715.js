import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import { User } from "./models/userModel.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(request);
  return res.status(234).send("hello");
});

app.post("/register", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "send all required fields",
      });
    }
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    };
    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`app is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

async function createUser() {
  const newUser = new User({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  });
  const user = await User.save(newUser);
  console.log(user);
}

createUser();
