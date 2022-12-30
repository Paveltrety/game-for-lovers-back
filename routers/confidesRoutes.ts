import Router from "express";
import { getAllConfides } from "../handlers/confidesHandlers";

const router = Router();

router.get("/confides", getAllConfides);

export default router;
