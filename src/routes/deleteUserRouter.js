import { Router } from "express";
import { deleteUser } from "../controllers/deleteUserController.js";

const router = Router();

router.get('/:id', deleteUser);

export default router;
