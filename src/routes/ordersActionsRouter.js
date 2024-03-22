import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { orderActions } from "../controllers/orderActionsController.js";

const router = Router();

router.get(
  '/',verifyToken,
  checkRole(['administrador', 'asesor']),
  orderActions
  );

export default router;
