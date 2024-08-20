import express from "express";
import mongoose from "mongoose";
import { Gc } from "../models/gcModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const gc = await Gc.find({});

    return res.status(200).json(gc);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    if (!req.body.name || !req.body.members) {
      return res.status(400).send({
        message: `this is the error ${error.message}`,
      });
    }
    const newGc = {
      name: req.body.name,
      members: req.body.members,
    };
    const gc = await Gc.create(newGc);

    return res.status(201).send(gc);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: `this is the error ${error.message}` });
  }
});

router.get("/chats/:id", async (req, res) => {
  try {
    res.send("test");
    console.log(JSON.stringify(req.body));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/chat/send/:gcId", async (req, res) => {
  const { gcId } = req.params; // Get the group chat ID from the URL
  const { message, sender, time, is_owner } = req.body; // Get the chat data from the request body

  try {
    // Find the group chat by ID and update the chats array
    const updatedGc = await Gc.findByIdAndUpdate(
      gcId,
      {
        $push: {
          chats: {
            message,
            sender: new mongoose.Types.ObjectId(sender), // Convert to ObjectId
            time,
            is_owner,
          },
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedGc) {
      return res.status(404).json({ message: "Group chat not found" });
    }

    res.status(200).json(updatedGc);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message, error });
  }
});

export default router;
