import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { usersSchema } from '../schemas/usersSchema.js';
import { updateUser } from '../controllers/updateUserController.js';
import { listUsers } from '../controllers/listUsersController.js'

const router = Router();

router.post('/:id', validatorHandler(usersSchema, 'body'), updateUser);
router.get('/listUsers', listUsers);

export default router;
