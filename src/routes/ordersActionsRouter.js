import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { orderActions } from "../controllers/orderActionsController.js";
import { typeCreated } from "../controllers/typeCreatedController.js";
import { duplicateAnjeoLight } from "../controllers/duplicateAnjeoLightController.js";
import { duplicateAnjeoHeavy } from "../controllers/duplicateAnjeosHeavyController.js";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosLightSchema } from '../schemas/anjeoLightSchema.js';
import { anjeosHeavySchema } from '../schemas/anjeoHeavySchema.js';
import { recordLightDuplicate } from "../controllers/recordLigthDuplicate.js";
import { recordHeavyDuplicate } from "../controllers/recordHeavyDuplicate.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  orderActions
);

router.get(
  '/typeCreated',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  typeCreated
);

router.get(
  '/duplicate/light',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  duplicateAnjeoLight
);

router.post(
  '/duplicate/light/insert/:id',
  validatorHandler(anjeosLightSchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  recordLightDuplicate
);

router.get(
  '/duplicate/heavy',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  duplicateAnjeoHeavy
);

router.post(
  '/duplicate/heavy/insert/:id',
  validatorHandler(anjeosHeavySchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  recordHeavyDuplicate
);

export default router;
