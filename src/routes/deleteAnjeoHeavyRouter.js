import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { deleteAnjeoHeavy } from "../controllers/deleteAnjeoHeavyController.js";

const router = Router();

router.get(
  '/:id',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  deleteAnjeoHeavy);

export default router;
