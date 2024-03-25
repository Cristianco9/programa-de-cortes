import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { usersSchema } from '../schemas/usersSchema.js';
import { settings } from "../controllers/settingsController.js";
import { userSettings } from "../controllers/userSettingsController.js";
import { newUser } from "../controllers/userFormController.js";
import { createUser } from "../controllers/createUserController.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador']),
  settings
);

router.get(
  '/users',
  verifyToken,
  checkRole(['administrador']),
  userSettings
);

router.get(
  '/users/new',
  verifyToken,
  checkRole(['administrador']),
  newUser
);

router.post(
  '/users/create',
  verifyToken,
  checkRole(['administrador']),
  validatorHandler(usersSchema, 'body'),
  createUser
);

export default router;
