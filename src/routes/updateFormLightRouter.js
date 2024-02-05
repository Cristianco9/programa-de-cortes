import { Router } from "express";
import { updateAnjeoLight } from "../controllers/updateAnjeoLightController.js";
import { listAnjeosLight } from "../controllers/listAnjeosLightController.js";
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.post('/:id', updateAnjeoLight);
router.get('/listLight', listAnjeosLight);
router.get('/typeCreated', typeCreated);

export default router;
