import { Router } from "express";
import { formHeavy } from "../controllers/formHeavyController.js";

const router = Router();

router.get('/', formHeavy);

export default router;
