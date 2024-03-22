import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js";

const router = Router();

router.get('/', verifyToken, listAnjeosHeavy);

export default router;
