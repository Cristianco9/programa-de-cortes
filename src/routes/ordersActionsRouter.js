import { Router } from "express";
import { orderActions } from "../controllers/orderActionsController.js";

const router = Router();

router.get('/', orderActions);

export default router;
