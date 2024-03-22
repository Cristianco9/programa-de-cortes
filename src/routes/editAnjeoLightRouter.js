import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { editAnjeoLight } from "../controllers/editAnjeosLightController.js";

const router = Router();

router.get('/:id', verifyToken, editAnjeoLight);

export default router;
