import express from "express";
import mongoose from "mongoose";
import { PORT } from "./constants/server";
import { createDbUrl } from "./utils/createDbUrl";
import confidesRoutes from "./routers/confidesRoutes";
import vulgarsRoutes from "./routers/vulgarsRoutes";
import userRoutes from "./routers/userRoutes";

import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const DB_URL = createDbUrl(process.env.MONGO_USER, process.env.MONGO_PASSWORD);
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", confidesRoutes);
app.use("/", vulgarsRoutes);
app.use("/", userRoutes);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(""));
  } catch (error) {
    console.log(error);
  }
}

startApp();
