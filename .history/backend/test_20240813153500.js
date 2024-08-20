import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1/test")
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
