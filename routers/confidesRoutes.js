import Router from "express";
import { getAllConfides } from "../handlers/confidesHandlers.js";

const router = new Router();

router.get("/confides", getAllConfides);

export default router;
