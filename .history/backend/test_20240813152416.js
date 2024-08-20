import mongoose from "mongoose";

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("mongodb://localhost/test");
    app.listen(PORT, () => {
      console.log(`app is listening to port: 3000`);
    });
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
