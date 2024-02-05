import { Router } from "express";
import { formLight } from "../controllers/formLightController.js";

const router = Router();

router.get('/', formLight);

export default router;
