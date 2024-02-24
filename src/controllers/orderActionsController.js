import Order from '../db/models/orderModel.js';
import  Boom from '@hapi/boom';

export const orderActions = async (req, res, next) => {

  // temporal
  const userOwnerEmail = "admin@gmail.com";

  try {
    const currentOrder = await Order.findOne({
      where: {
        userOwnerEmail: userOwnerEmailOwnerEmail
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
