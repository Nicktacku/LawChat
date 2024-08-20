import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});

mongoose.connect(MongoDBURL).then(console.log("connected to database"));
