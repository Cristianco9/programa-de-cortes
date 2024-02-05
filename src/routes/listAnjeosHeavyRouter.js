import { Router } from "express";
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js";

const router = Router();

router.get('/', listAnjeosHeavy);

export default router;
