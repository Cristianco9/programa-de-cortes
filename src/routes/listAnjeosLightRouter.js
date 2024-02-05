import { Router } from "express";
import { listAnjeosLight } from "../controllers/listAnjeosLightController.js";

const router = Router();

router.get('/', listAnjeosLight);

export default router;
