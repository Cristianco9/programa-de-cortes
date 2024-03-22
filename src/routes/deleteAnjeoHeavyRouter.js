import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { deleteAnjeoHeavy } from "../controllers/deleteAnjeoHeavyController.js";

const router = Router();

router.get('/:id', verifyToken, deleteAnjeoHeavy);

export default router;
