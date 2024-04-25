import { getUserIdFromCookie, getUserRolFromCookie } from '../utils/auth/tokenData.js';
import { Order } from '../db/models/orderModel.js';
import { signUserToken } from '../utils/auth/tokenSign.js';
import { config } from '../config/config.js'
import Boom from '@hapi/boom';

export const orderIDValidation = async (req, res, next) => {

  const userOwnerID = getUserIdFromCookie(req);
  const userOwnerRol = getUserRolFromCookie(req);

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
    for (let id of ordersID) {
      if (id === orderNumber) {
        orderExist = true;
        break;
      }
    };

    if (orderExist) {

      const userData = {
        id: userOwnerID,
        rol: userOwnerRol,
        currentOrder: orderNumber
      };
      const token = signUserToken(userData, config.jwtKey);
      res.cookie('authentication', token, { httpOnly: true });
      return res.render('orderActions', { orderNumber: orderNumber });
    } else {

      try {
        const createOrder = await Order.create({
          userOwnerID: userOwnerID,
          id: orderNumber,
          dateCreation: new Date(),
        });

        const userData = {
          id: userOwnerID,
          rol: userOwnerRol,
          currentOrder: orderNumber
        };
        const token = signUserToken(userData, config.jwtKey);
        res.cookie('authentication', token, { httpOnly: true });
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
