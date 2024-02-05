import { Router } from "express";
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.get('/', typeCreated);

export default router;
