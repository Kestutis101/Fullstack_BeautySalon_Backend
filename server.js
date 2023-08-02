import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(router);

export default app;
