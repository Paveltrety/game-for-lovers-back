import Router from "express";
import { getAllVulgars } from "../handlers/vulgarsHandlers";

const router = Router();

router.get("/vulgars", getAllVulgars);

export default router;
