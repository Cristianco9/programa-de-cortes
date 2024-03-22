import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { editUser } from "../controllers/editUserController.js";

const router = Router();

router.get('/:id', verifyToken, editUser);

export default router;
