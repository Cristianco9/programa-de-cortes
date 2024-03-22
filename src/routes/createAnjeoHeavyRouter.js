import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosHeavySchema } from '../schemas/anjeoHeavySchema.js';
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { createAnjeoHeavy } from "../controllers/createAnjeoHeavyController.js";

const router = Router();

router.post(
  '/',
  validatorHandler(anjeosHeavySchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  createAnjeoHeavy
  );

export default router;
