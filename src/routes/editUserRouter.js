import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { checkRole } from '../middlewares/checkRoleHandler.js';
import { editUser } from "../controllers/editUserController.js";

const router = Router();

router.get(
  '/:id',
  verifyToken,
  checkRole(['administrador']),
  editUser
  );

export default router;
