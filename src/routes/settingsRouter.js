import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { settings } from "../controllers/settingsController.js";
import { userSettings } from "../controllers/userSettingsController.js";

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

export default router;
