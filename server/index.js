import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// Routes;

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

//Create Port
const PORT = process.env.PORT || 3001;
//Listen
app.listen(PORT, () => {
  console.log(`Server at running on the  port:https://localhost: ${PORT}`);
});
