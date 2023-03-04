import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());

//Create Port

const PORT = process.env.PORT || 3001;

//Listen

app.listen(PORT, () => {
  console.log(`Server at running on the  port:http://localhost: ${PORT}`);
});
