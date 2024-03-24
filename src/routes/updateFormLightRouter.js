import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosLightSchema } from '../schemas/anjeoLightSchema.js';
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { updateAnjeoLight } from "../controllers/updateAnjeoLightController.js";
import { listAnjeosLight } from "../controllers/listAnjeosLightController.js";
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.post(
  '/:id',
  validatorHandler(anjeosLightSchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  updateAnjeoLight
);

router.get('/listLight', verifyToken, listAnjeosLight);
router.get('/typeCreated', verifyToken, typeCreated);

export default router;
