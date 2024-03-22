import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const formHeavy = async (req, res, next) => {

  const userOwnerID = getUserIdFromCookie(req);

  try {
    const ordersCreated = await Order.findOne({
      attributes: ['id'],
      where: {
        userOwnerID: userOwnerID
      },
      order: [['date_creation', 'DESC']],
      limit: 1
    });

    const currentOrder = ordersCreated ? ordersCreated.id : null;
    res.render('formHeavy', { currentOrder: currentOrder });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de datos',
      err.message);
    next(boomError);
  }
};
