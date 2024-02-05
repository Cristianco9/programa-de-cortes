import { Router } from "express";
import { type } from "../controllers/typeController.js";

const router = Router();

router.get('/', type);


export default router;
