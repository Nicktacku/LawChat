import express from require("express");
import { PORT } from "./config.js";

const app = express();

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
