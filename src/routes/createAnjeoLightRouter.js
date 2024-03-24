import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosLightSchema } from '../schemas/anjeoLightSchema.js';
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { createAnejoLight } from "../controllers/createAnjeoLightController.js";

const router = Router();

router.post(
  '/',
  validatorHandler(anjeosLightSchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  createAnejoLight
);

export default router;
