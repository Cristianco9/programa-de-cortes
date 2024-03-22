import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { deleteUser } from "../controllers/deleteUserController.js";

const router = Router();

router.get('/:id', verifyToken, deleteUser);

export default router;
