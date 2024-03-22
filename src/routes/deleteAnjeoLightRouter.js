import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { deleteAnjeoLight } from "../controllers/deleteAnjeoLightController.js";

const router = Router();

router.get('/:id', verifyToken, deleteAnjeoLight);

export default router;
