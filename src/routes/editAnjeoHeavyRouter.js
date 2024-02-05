import { Router } from "express";
import { editAnjeoHeavy } from "../controllers/editAnjeosHeavyController.js";

const router = Router();

router.get('/:id', editAnjeoHeavy);

export default router;
