import { Router } from "express";
import { createAnjeoHeavy } from "../controllers/createAnjeoHeavyController.js";

const router = Router();

router.post('/', createAnjeoHeavy);

export default router;
