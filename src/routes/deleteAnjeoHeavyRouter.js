import { Router } from "express";
import { deleteAnjeoHeavy } from "../controllers/deleteAnjeoHeavyController.js";

const router = Router();

router.get('/:id', deleteAnjeoHeavy);

export default router;
