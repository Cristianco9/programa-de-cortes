import { Router } from "express";
import {
    userLogin,
    login,
    tools,
    order,
    type,
    orderIDValidation,
    formLight,
    formHeavy,
    createFormHeavy,
    createFormLight,
    orderActions,
    typeCreated,
    listLight,
    listHeavy,
    editAnjeoLight,
    deleteAnjeoLight,
    deleteAnjeoHeavy
    //updateAnjeo
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
router.post('/createFormHeavy', createFormHeavy);
router.post('/createFormLight', createFormLight);
router.get('/orderActions', orderActions);
router.get('/typeCreated', typeCreated);
router.get('/listLight', listLight);
router.get('/listHeavy', listHeavy);
router.get('/editAnjeoLight/:id', editAnjeoLight);
router.post('/deleteAnjeoLight', deleteAnjeoLight);
router.post('/deleteAnjeoHeavy', deleteAnjeoHeavy);
//router.get('/updateAnjeo/:id', updateAnjeo);

export default router;