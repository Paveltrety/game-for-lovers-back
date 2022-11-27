import express from "express";
import mongoose from "mongoose";
import { PORT } from "./constants/server.js";
import { createDbUrl } from "./utils/createDbUrl.js";
import confidesRoutes from "./routers/confidesRoutes.js";
import vulgarsRoutes from "./routers/vulgarsRoutes.js";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const DB_URL = createDbUrl(process.env.MONGO_USER, process.env.MONGO_PASSWORD);
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", confidesRoutes);
app.use("/", vulgarsRoutes);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(""));
  } catch (error) {
    console.log(error);
  }
}

startApp();
