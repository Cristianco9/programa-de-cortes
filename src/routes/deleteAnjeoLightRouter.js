import { Router } from "express";
import { deleteAnjeoLight } from "../controllers/deleteAnjeoLightController.js";

const router = Router();

router.get('/:id', deleteAnjeoLight);

export default router;
