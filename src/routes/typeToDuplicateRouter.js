import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { typeToDuplicate } from "../controllers/typeToDuplicateController.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  typeToDuplicate
);

export default router;
