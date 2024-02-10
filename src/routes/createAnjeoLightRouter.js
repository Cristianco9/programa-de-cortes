import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosLightSchema } from '../schemas/anjeoLightSchema.js'
import { createAnejoLight } from "../controllers/createAnjeoLightController.js";

const router = Router();

router.post('/', validatorHandler(anjeosLightSchema, 'body'), createAnejoLight);

export default router;
