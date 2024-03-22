import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const orderIDValidation = async (req, res, next) => {

  const userOwnerID = getUserIdFromCookie(req);

  const orderInput = req.body.orderNumber;
  const orderNumber = Math.floor(orderInput);

  try {
    const recordSearch = await Order.findAll({
      attributes: ['id'],
      where: {
        userOwnerID: userOwnerID
      }
    });

    const ordersID = recordSearch.map(record => record.id);

    let orderExist = false;
    for (const id of ordersID) {
      if (id === orderNumber) {
        orderExist = true;
        break;
      }
    };

    if (orderExist) {
      return res.render('orderActions', { orderNumber: orderNumber });
    } else {

      try {
        const createOrder = await Order.create({
          userOwnerID: userOwnerID,
          id: orderNumber,
          dateCreation: new Date(),
        });
        return res.render('type');
      } catch (err) {
        const boomError = Boom.notImplemented(
          'No es posible crear el pedido en la base de datos', err);
        next(boomError);
      }
    };
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de datos',
      err);
    next(boomError);
  }
}
