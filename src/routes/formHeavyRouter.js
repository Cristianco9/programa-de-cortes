import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { formHeavy } from "../controllers/formHeavyController.js";

const router = Router();

router.get('/', verifyToken, formHeavy);

export default router;
