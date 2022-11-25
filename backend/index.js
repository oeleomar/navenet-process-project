import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";

import { router } from "./src/routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static("public"));
app.use(cors());
app.use(helmet());

app.use(router);
mongoose.connect("mongodb://localhost:27017/process", () => {
  console.log("Conectado");
  app.listen(3001);
});
