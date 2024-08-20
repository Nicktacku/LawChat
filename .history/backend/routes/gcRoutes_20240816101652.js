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
    const {
      name,
      members,
      group_image,
      nicknames,
      initialChats, // Array of initial chat messages
    } = req.body;

    // Validate inputs
    if (
      !name ||
      !members ||
      !nicknames ||
      members.length !== nicknames.length
    ) {
      return res.status(400).json({ message: "Invalid input" });
    }

    if (!initialChats || initialChats.length === 0) {
      return res.status(400).json({ message: "Initial chats cannot be empty" });
    }

    // Prepare chats array and extract last chat info
    const chats = initialChats.map((chat) => ({
      message: chat.message,
      sender: chat.sender,
      time: chat.time,
      is_owner: chat.is_owner,
    }));

    const lastChat = chats[chats.length - 1];

    // Create the group chat
    const newGc = new Gc({
      name,
      members,
      group_image,
      nicknames,
      last_chat: new mongoose.Types.ObjectId(lastChat._id), // Assuming _id is being generated client-side or elsewhere
      last_chat_time: lastChat.time,
      chats,
    });

    // Save to the database
    const savedGc = await newGc.save();

    res.status(201).json(savedGc);
  } catch (error) {
    console.error("Error creating group chat:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
