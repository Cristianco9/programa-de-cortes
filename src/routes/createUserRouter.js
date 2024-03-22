import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { usersSchema } from '../schemas/usersSchema.js';
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { createUser } from "../controllers/createUserController.js";

const router = Router();

router.post(
  '/',
  validatorHandler(usersSchema, 'body'),
  verifyToken,
  checkRole(['administrador']),
  createUser
  );

export default router;
