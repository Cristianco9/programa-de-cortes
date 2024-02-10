import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { ordersSchema } from '../schemas/ordersSchema.js';
import { orderIDValidation } from "../controllers/orderIDValidation.js";

const router = Router();

router.post('/', validatorHandler(ordersSchema, 'body'), orderIDValidation);

export default router;
