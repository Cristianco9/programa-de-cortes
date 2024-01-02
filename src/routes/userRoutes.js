import { Router } from "express";
import {
    userLogin,
    login,
    tools
} from "../controllers/userController.js";

const router = Router();

router.get("/", userLogin);
router.post("/login", login);
router.get("/tools", tools);

export default router;