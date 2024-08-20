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

export default gcRouter;
