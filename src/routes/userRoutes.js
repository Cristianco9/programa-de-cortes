import { Router } from "express";
import {
    userLogin
} from "../controllers/userController.js";

const router = Router();

router.get("/", userLogin);

export default router;