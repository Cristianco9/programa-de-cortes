import { Router } from "express";
import { orderIDValidation } from "../controllers/orderIDValidation.js";

const router = Router();

router.post('/', orderIDValidation);

export default router;
