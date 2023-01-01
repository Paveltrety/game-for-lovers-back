import Router from "express";
import { postDataUser } from "../handlers/usersHandlers";

const router = Router();

router.post("/users", postDataUser);

export default router;