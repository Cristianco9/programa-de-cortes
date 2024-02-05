import { Router } from "express";
import { order } from "../controllers/ordersController.js";

const router = Router();

router.get('/', order);

export default router;
