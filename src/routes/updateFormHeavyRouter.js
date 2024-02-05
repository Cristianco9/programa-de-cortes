import { Router } from "express";
import { updateAnjeoHeavy } from "../controllers/updateAnjeoHeavyController.js";
import { listAnjeosHeavy } from "../controllers/listAnjeosHeavyController.js"
import { typeCreated } from "../controllers/typeCreatedController.js";

const router = Router();

router.post('/:id', updateAnjeoHeavy);
router.get('/listHeavy', listAnjeosHeavy);
router.get('/typeCreated', typeCreated);

export default router;
