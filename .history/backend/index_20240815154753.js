import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import gcRoutes from "./routes/gcRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5555",
//     method: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/users", userRoutes);
app.use("/cg", cgRoutes);
app.use("/chat", chatRoutes);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello");
});

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
