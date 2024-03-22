import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { listUsers } from "../controllers/listUsersController.js";

const router = Router();

router.get('/', verifyToken, listUsers);

export default router;
