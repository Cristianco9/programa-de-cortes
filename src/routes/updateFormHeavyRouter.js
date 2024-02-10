import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosHeavySchema } from '../schemas/anjeoHeavySchema.js';
import { updateAnjeoHeavy } from "../controllers/updateAnjeoHeavyController.js";
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js"
import { typeCreated } from "../controllers/typeCreatedController.js";


const router = Router();

router.post('/:id', validatorHandler(anjeosHeavySchema, 'body'), updateAnjeoHeavy);
router.get('/listHeavy', listAnjeosHeavy);
router.get('/typeCreated', typeCreated);

export default router;
