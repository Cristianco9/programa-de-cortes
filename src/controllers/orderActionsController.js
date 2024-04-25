import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import  Boom from '@hapi/boom';

export const orderActions = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);

    if (currentOrderID) {
      const orderNumber = currentOrderID ? currentOrderID : null;
      res.render('orderActions', { orderNumber: orderNumber });
    } else {
      res.render('orderActions', { orderNumber: null });
    }
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      `No es posible verificar el número de la orden en los datos enviados
      por el cliente`,
      err.message);
    next(boomError);
  }
};
