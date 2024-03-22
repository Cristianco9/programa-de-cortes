import { Router } from "express";
import { userRedirect } from "../controllers/userRedirectController.js";
import { verifyToken } from '../middlewares/tokenHandler.js';

const router = Router();

router.get('/', verifyToken, userRedirect);


export default router;
