import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { orderActions } from "../controllers/orderActionsController.js";

const router = Router();

router.get('/', verifyToken, orderActions);

export default router;
