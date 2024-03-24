import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { order } from "../controllers/ordersController.js";
//import { checkApiKey } from "../middlewares/authHandler.js";

const router = Router();

//router.get('/', checkApiKey, order);
router.get(
  '/',
  verifyToken,
  checkRole(['administrador', 'asesor']),
  order
);

export default router;
