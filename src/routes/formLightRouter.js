import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { formLight } from "../controllers/formLightController.js";

const router = Router();

router.get('/', verifyToken, formLight);

export default router;
