import { Router } from "express";
import { editUser } from "../controllers/editUserController.js";

const router = Router();

router.get('/:id', editUser);

export default router;
