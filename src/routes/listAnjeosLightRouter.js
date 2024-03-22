import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { listAnjeosLight } from "../controllers/listAnjeosLightController.js";

const router = Router();

router.get('/', verifyToken, listAnjeosLight);

export default router;
