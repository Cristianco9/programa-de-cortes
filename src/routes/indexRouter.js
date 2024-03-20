import { Router } from "express";
import loginRouter from "./loginRouter.js";
import toolsRouter from "./toolsRouter.js";
import ordersRouter from "./ordersRouter.js";
import ordersIDRouter from "./ordersIDRouter.js";
import ordersActionsRouter from "./ordersActionsRouter.js";
import typeRouter from "./typeRouter.js";
import typeCreatedRouter from "./typeCreatedRouter.js";
import formLightRouter from "./formLightRouter.js";
import formHeavyRouter from "./formHeavyRouter.js";
import createAnjeoLightRouter from "./createAnjeoLightRouter.js";
import createAnjeoHeavyRouter from "./createAnjeoHeavyRouter.js";
import listAnjeosLightRouter from "./listAnjeosLightRouter.js";
import listAnjeosHeavyRouter from "./listAnjeosHeavyRouter.js";
import editAnjeoLightRouter from "./editAnjeoLightRouter.js";
import editAnjeoHeavyRouter from "./editAnjeoHeavyRouter.js";
import deleteAnjeoLightRouter from "./deleteAnjeoLightRouter.js";
import deleteAnjeoHeavyRouter from "./deleteAnjeoHeavyRouter.js";
import updateFormLightRouter from "./updateFormLightRouter.js";
import updateFormHeavyRouter from "./updateFormHeavyRouter.js";
import createUserRouter from './createUserRouter.js';
import listUsersRouter from './listUsersRouter.js';
import editUserRouter from './editUserRouter.js';
import deleteUserRouter from './deleteUserRouter.js';
import updateUserRouter from './updateFormUserRouter.js';

const routerApi = (app) => {

  const router = Router();

  app.use('/api/v1', router);

  router.use('/', loginRouter);
  router.use('/tools', toolsRouter);
  router.use('/order', ordersRouter);
  router.use('/orderID', ordersIDRouter);
  router.use('/orderActions', ordersActionsRouter);
  router.use('/type', typeRouter);
  router.use('/typeCreated', typeCreatedRouter);
  router.use('/formLight', formLightRouter);
  router.use('/formHeavy', formHeavyRouter);
  router.use('/createFormLight', createAnjeoLightRouter);
  router.use('/createFormHeavy', createAnjeoHeavyRouter);
  router.use('/listLight', listAnjeosLightRouter);
  router.use('/listHeavy', listAnjeosHeavyRouter);
  router.use('/editAnjeoLight', editAnjeoLightRouter);
  router.use('/editAnjeoHeavy', editAnjeoHeavyRouter);
  router.use('/deleteAnjeoLight', deleteAnjeoLightRouter);
  router.use('/deleteAnjeoHeavy', deleteAnjeoHeavyRouter);
  router.use('/updateFormLight', updateFormLightRouter);
  router.use('/updateFormHeavy', updateFormHeavyRouter);
  router.use('/createUser', createUserRouter);
  router.use('/listUsers', listUsersRouter);
  router.use('/editUser', editUserRouter);
  router.use('/deleteUser', deleteUserRouter);
  router.use('/updateUser', updateUserRouter);

}

export default routerApi;
