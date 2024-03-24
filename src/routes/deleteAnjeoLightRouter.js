import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { deleteAnjeoLight } from "../controllers/deleteAnjeoLightController.js";

const router = Router();

router.get(
  '/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  deleteAnjeoLight
);

export default router;
