import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosHeavySchema } from '../schemas/anjeoHeavySchema.js';
import { createAnjeoHeavy } from "../controllers/createAnjeoHeavyController.js";

const router = Router();

router.post('/', validatorHandler(anjeosHeavySchema, 'body'), createAnjeoHeavy);

export default router;
