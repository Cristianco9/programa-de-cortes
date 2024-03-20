import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { usersSchema } from '../schemas/usersSchema.js'
import { createUser } from "../controllers/createUserController.js";

const router = Router();

router.post('/', validatorHandler(usersSchema, 'body'), createUser);

export default router;
