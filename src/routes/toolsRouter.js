import { Router } from "express";
import { tools } from "../controllers/toolsController.js";

const router = Router();

router.get('/', tools);

export default router;
