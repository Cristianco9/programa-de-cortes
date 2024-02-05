import { Router } from "express";
import { editAnjeoLight } from "../controllers/editAnjeosLightController.js";

const router = Router();

router.get('/:id', editAnjeoLight);

export default router;
