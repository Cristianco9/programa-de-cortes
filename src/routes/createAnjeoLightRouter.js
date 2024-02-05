import { Router } from "express";
import { createAnejoLight } from "../controllers/createAnjeoLightController.js";

const router = Router();

router.post('/', createAnejoLight);

export default router;
