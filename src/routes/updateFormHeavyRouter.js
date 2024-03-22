import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosHeavySchema } from '../schemas/anjeoHeavySchema.js';
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { updateAnjeoHeavy } from "../controllers/updateAnjeoHeavyController.js";
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js"
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.post(
  '/:id',
  validatorHandler(anjeosHeavySchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  updateAnjeoHeavy
  );
router.get('/listHeavy', verifyToken, listAnjeosHeavy);
router.get('/typeCreated', verifyToken, typeCreated);

export default router;
