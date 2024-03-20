import { Router } from "express";
import { listUsers } from "../controllers/listUsersController.js";

const router = Router();

router.get('/', listUsers);

export default router;
