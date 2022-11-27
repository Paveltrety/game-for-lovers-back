import Router from "express";
import { getAllVulgars } from "../handlers/vulgarsHandlers.js";

const router = new Router();

router.get("/vulgars", getAllVulgars);

export default router;
