import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { editAnjeoHeavy } from "../controllers/editAnjeosHeavyController.js";

const router = Router();

router.get(
  '/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  editAnjeoHeavy
);

export default router;
