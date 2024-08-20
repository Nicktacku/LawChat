import express from "express";
import { PORT, MongoDBURL } from "./config.js";

const app = express();

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
