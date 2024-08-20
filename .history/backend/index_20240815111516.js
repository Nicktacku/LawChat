import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`app is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

// async function createUser() {
//   const newUser = new User({
//     name: "nicko",
//     email: "emil",
//     password: "pass",
//   });
//   const user = await newUser.save();
//   console.log(newUser);
// }

// createUser();
