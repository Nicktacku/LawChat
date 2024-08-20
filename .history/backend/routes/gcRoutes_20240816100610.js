import express from "express";
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

router.get("/chats", async (req, res) => {
  try {
    const gc = await Gc.findById(req.params.id)
      .populate("members", "name") // Populate the members with their usernames
      .populate("chats.send", "name") // Populate chat sender with their username
      .populate("last_chat", "message"); // Populate last chat with its message

    if (!gc) {
      return res.status(404).json({ message: "Group chat not found" });
    }

    res.json(gc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/chats/send/:id", async (req, res) => {
  try {
    // const gc = await Gc.findById(req.params.id)
    //   .populate("members", "username") // Populate the members with their usernames
    //   .populate("chats.sender", "username") // Populate chat sender with their username
    //   .populate("last_chat", "message"); // Populate last chat with its message

    // if (!gc) {
    //   return res.status(404).json({ message: "Group chat not found" });
    // }

    // res.json(gc);
    res.send("hey");

    console.log(`request: ${JSON.stringingy(req.params)}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
