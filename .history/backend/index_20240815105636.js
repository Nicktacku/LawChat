import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import { User } from "./models/userModel.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello");
});

app.post("/register", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send({
        message: `this is the error ${error.message}`,
      });
    }
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await User.create(newUser);

    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: `this is the error ${error.message}` });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
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

// async function createUser() {
//   const newUser = new User({
//     name: "nicko",
//     email: "emil",
//     password: "pass",
//   });
//   const user = await newUser.save();
//   console.log(newUser);
// }

// createUser();
