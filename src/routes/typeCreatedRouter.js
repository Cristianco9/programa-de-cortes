import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.get('/', verifyToken, typeCreated);

export default router;
