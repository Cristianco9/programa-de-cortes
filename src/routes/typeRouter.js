import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { type } from "../controllers/typeController.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  type
);


export default router;
