import { Router } from "express";
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { anjeosLightSchema } from '../schemas/anjeoLightSchema.js';
import { updateAnjeoLight } from "../controllers/updateAnjeoLightController.js";
import { listAnjeosLight } from "../controllers/listAnjeosLightController.js";
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.post('/:id', validatorHandler(anjeosLightSchema, 'body'), updateAnjeoLight);
router.get('/listLight', listAnjeosLight);
router.get('/typeCreated', typeCreated);

export default router;
