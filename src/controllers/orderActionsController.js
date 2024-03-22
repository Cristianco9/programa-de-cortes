import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { Order } from '../db/models/orderModel.js';
import  Boom from '@hapi/boom';

export const orderActions = async (req, res, next) => {

  const userOwnerID = getUserIdFromCookie(req);

  try {
    const currentOrder = await Order.findOne({
      where: {
        userOwnerID: userOwnerID
      },
      order: [['dateCreation', 'DESC']],
      limit: 1
    });

    if (currentOrder) {
      const orderNumber = currentOrder.id;
      res.render('orderActions', { orderNumber: orderNumber });
    } else {
      res.render('orderActions', { orderNumber: null });
    }
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de datos',
      err.message);
    next(boomError);
  }
};
