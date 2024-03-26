import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { usersSchema } from '../schemas/usersSchema.js';
import { settings } from "../controllers/settingsController.js";
import { userSettings } from "../controllers/userSettingsController.js";
import { newUser } from "../controllers/userFormController.js";
import { createUser } from "../controllers/createUserController.js";
import { listUsers } from "../controllers/listUsersController.js";
import { deleteUser } from "../controllers/deleteUserController.js";
import { editUser } from "../controllers/editUserController.js";
import { updateUser } from "../controllers/updateUserController.js";

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

router.get(
  '/users/listUsers',
  verifyToken,
  checkRole(['administrador']),
  listUsers
);

router.get(
  '/users/editUser/:id',
  verifyToken,
  checkRole(['administrador']),
  editUser
);

router.post(
  '/users/update/:id',
  verifyToken,
  checkRole(['administrador']),
  updateUser
);

router.get(
  '/users/deleteUser/:id',
  verifyToken,
  checkRole(['administrador']),
  deleteUser
);

export default router;
