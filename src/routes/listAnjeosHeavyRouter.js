import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  listAnjeosHeavy
);

export default router;
