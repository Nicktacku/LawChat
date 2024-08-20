import express from "express";
import { Chat } from "../models/chatModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const chat = await Chat.find({});

    return res.status(200).json(chat);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/send", async (req, res) => {
  try {
    if (!req.body.message || !req.body.sender || !req.body.is_owner) {
      return res.status(400).send({
        message: `this is the error ${error.message}`,
      });
    }
    const newGc = {
      message: req.body.message,
      sender: req.body.sender,
      is_owner: req.body.is_owner,
    };
    const chat = await Chat.create(newChat);

    return res.status(201).send(chat);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: `this is the error ${error.message}` });
  }
});

export default router;
