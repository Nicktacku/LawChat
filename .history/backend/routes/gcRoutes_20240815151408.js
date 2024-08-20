import express from "express";
import { Gc } from "../models/gcModel.js";

const router = express.Router();

router.post("/create", async (req, res) => {
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
