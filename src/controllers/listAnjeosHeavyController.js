import Order from '../db/models/orderModel.js';
import AnjeoHeavy from '../db/models/anjeoHeavyModel.js';
import Boom from '@hapi/boom';

export const listAnjeosHeavy = async (req, res, next) => {

  // temporal
  const userOwnerEmail = "admin@gmail.com";

  try {
    const currentOrder = await Order.findOne({
      attributes: ['order_id'],
      where: {
        user_owner_email: userOwnerEmail
      },
      order: [['date_creation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder ? currentOrder.id : null;

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de daatos',
      error.message);
    next(boomError);
  }

  try {
    const anjeosCreated = await AnjeoHeavy.findAll({
      attributes: ['anjeo_heavy_id', 'place'],
      where: {
        order_owner_id: orderNumber
      },
      order: [['anjeo_heavy_id', 'ASC']]
    });

    const anjeosHeavyQuantity = anjeosCreated.length;
    res.render('listHeavy',
    {
      anjeosCreated: anjeosCreated,
      orderNumber: orderNumber,
      anjeosHeavyQuantity: anjeosHeavyQuantity
    });
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de anjeos pesados creados', err.message);
    next(boomError);
  }
};
