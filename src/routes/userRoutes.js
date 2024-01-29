import { Router } from "express";
import {
    userLogin,
    login,
    tools,
    order,
    type,
    orderIDValidation,
    formLight,
    formHeavy
} from "../controllers/userController.js";

const router = Router();

router.get('/', userLogin);
router.post('/login', login);
router.get('/tools', tools);
router.get('/order', order);
router.post('/orderID', orderIDValidation);
router.get('/type', type);
router.get('/formLight', formLight);
router.get('/formHeavy', formHeavy);

export default router;