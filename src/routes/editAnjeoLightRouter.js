import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { editAnjeoLight } from "../controllers/editAnjeosLightController.js";

const router = Router();

router.get(
  '/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  editAnjeoLight
);

export default router;
