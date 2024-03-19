import { Router } from "express";
import { order } from "../controllers/ordersController.js";
//import { checkApiKey } from "../middlewares/authHandler.js";

const router = Router();

//router.get('/', checkApiKey, order);
router.get('/', order);

export default router;
