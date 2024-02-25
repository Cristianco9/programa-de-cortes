import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const formLight = async (req, res, next) => {

  // temporal
  const userOwnerID = 1;

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
    res.render('formLight', { currentOrder: currentOrder });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de datos',
      err.message);
    next(boomError);
  }
};
