import { Router } from "express";
import { verifyToken } from '../middlewares/tokenHandler.js';
import { tools } from "../controllers/toolsController.js";

const router = Router();

router.get(
  '/',
  verifyToken,
  tools
);

export default router;
