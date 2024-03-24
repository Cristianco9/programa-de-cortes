import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { formHeavy } from "../controllers/formHeavyController.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  formHeavy
);

export default router;
