import { Router } from "express";
import loginRouter from "./loginFormRouter.js";
import toolsRouter from "./toolsRouter.js";
import ordersRouter from "./ordersRouter.js";
import ordersIDRouter from "./ordersIDRouter.js";
import ordersActionsRouter from "./ordersActionsRouter.js";
import settingsRouter from './settingsRouter.js';

const routerApi = (app) => {

  const router = Router();

  app.use('/api/v1', router);

  router.use('/', loginRouter);
  router.use('/tools', toolsRouter);
  router.use('/order', ordersRouter);
  router.use('/orderID', ordersIDRouter);
  router.use('/orderActions', ordersActionsRouter);
  router.use('/settings', settingsRouter);

}

export default routerApi;
