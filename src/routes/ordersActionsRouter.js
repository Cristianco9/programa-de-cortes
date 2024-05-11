import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { orderActions } from "../controllers/orderActionsController.js";
import { type } from "../controllers/typeController.js";
import { formLight } from "../controllers/formLightController.js";
import { createAnejoLight } from "../controllers/createAnjeoLightController.js";
import { createAnjeoHeavy } from "../controllers/createAnjeoHeavyController.js";
import { formHeavy } from "../controllers/formHeavyController.js";
import { typeCreated } from "../controllers/typeCreatedController.js";
import { typeToDuplicate } from "../controllers/typeToDuplicateController.js";
import { listAnjeosLight } from "../controllers/listAnjeosLightController.js";
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js";
import { duplicateAnjeoLight } from "../controllers/duplicateAnjeoLightController.js";
import { duplicateAnjeoHeavy } from "../controllers/duplicateAnjeosHeavyController.js";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosLightSchema } from '../schemas/anjeoLightSchema.js';
import { anjeosHeavySchema } from '../schemas/anjeoHeavySchema.js';
import { editAnjeoLight } from "../controllers/editAnjeosLightController.js";
import { editAnjeoHeavy } from "../controllers/editAnjeosHeavyController.js";
import { updateAnjeoLight } from "../controllers/updateAnjeoLightController.js";
import { updateAnjeoHeavy } from "../controllers/updateAnjeoHeavyController.js";
import { deleteAnjeoLight } from "../controllers/deleteAnjeoLightController.js";
import { deleteAnjeoHeavy } from "../controllers/deleteAnjeoHeavyController.js";
import { recordLightDuplicate } from "../controllers/recordLightDuplicate.js";
import { recordHeavyDuplicate } from "../controllers/recordHeavyDuplicate.js";
import { cuttingOrder } from "../controllers/cuttingOrderController.js"

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  orderActions
);

router.get(
  '/type',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  type
);

router.get(
  '/type/formLight',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  formLight
);

router.post(
  '/type/formLight/createFormLight',
  validatorHandler(anjeosLightSchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  createAnejoLight
);

router.get(
  '/type/formHeavy',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  formHeavy
);

router.post(
  '/type/formHeavy/createFormHeavy',
  validatorHandler(anjeosHeavySchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  createAnjeoHeavy
);

router.get(
  '/typeCreated',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  typeCreated
);

router.get(
  '/listLight',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  listAnjeosLight
);

router.get(
  '/listHeavy',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  listAnjeosHeavy
);

router.get(
  '/editAnjeoLight/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  editAnjeoLight
);

router.post(
  '/updateFormLight/:id',
  validatorHandler(anjeosLightSchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  updateAnjeoLight
);

router.get(
  '/editAnjeoHeavy/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  editAnjeoHeavy
);

router.post(
  '/updateFormHeavy/:id',
  validatorHandler(anjeosHeavySchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  updateAnjeoHeavy
);

router.get(
  '/deleteAnjeoLight/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  deleteAnjeoLight
);

router.get(
  '/deleteAnjeoHeavy/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  deleteAnjeoHeavy
);

router.get(
  '/typeToDuplicate',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  typeToDuplicate
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

router.get(
  '/dscts',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  cuttingOrder
);

export default router;
