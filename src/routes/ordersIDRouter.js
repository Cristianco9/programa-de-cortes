import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { ordersSchema } from '../schemas/ordersSchema.js';
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { orderIDValidation } from "../controllers/orderIDValidation.js";

const router = Router();

router.post(
  '/',
  validatorHandler(ordersSchema, 'body'),
  verifyToken,
  checkRole(['administrador', 'asesor']),
  orderIDValidation
  );

export default router;
