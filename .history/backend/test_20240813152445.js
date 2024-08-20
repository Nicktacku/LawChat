import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/test")
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`app is listening to port: 3000`);
    });
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
