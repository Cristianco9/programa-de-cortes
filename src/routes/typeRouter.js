import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { type } from "../controllers/typeController.js";

const router = Router();

router.get('/', verifyToken, type);


export default router;
