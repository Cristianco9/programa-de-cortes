import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { editAnjeoHeavy } from "../controllers/editAnjeosHeavyController.js";

const router = Router();

router.get('/:id', verifyToken, editAnjeoHeavy);

export default router;
