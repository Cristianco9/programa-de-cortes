import { Router } from "express";
import {
    userLogin,
    login,
    tools,
    order
} from "../controllers/userController.js";

const router = Router();

router.get("/", userLogin);
router.post("/login", login);
router.get("/tools", tools);
router.get("/order", order);

export default router;