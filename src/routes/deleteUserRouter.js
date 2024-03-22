import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { deleteUser } from "../controllers/deleteUserController.js";

const router = Router();

router.get(
  '/:id',
  verifyToken,
  checkRole(['administrador']),
  deleteUser
  );

export default router;
