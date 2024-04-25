import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import Boom from '@hapi/boom';

export const formLight = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const currentOrder = currentOrderID ? currentOrderID : null;
    res.render('formLight', { currentOrder: currentOrder });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      `No es posible verificar el número de la orden en los datos enviados
      por el cliente`,
      err.message);
    next(boomError);
  }
};
