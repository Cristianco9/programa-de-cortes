import Order from '../db/models/orderModel.js';
import AnjeoLight from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const listAnjeosLight = async (req, res, next) => {

  // temporal
  const userOwnerEmail = "admin@gmail.com";

  try {
    const currentOrder = await Order.findOne({
      attributes: ['id'],
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
    const anjeosLightCreated = await AnjeoLight.findAll({
      attributes: ['anjeo_light_id', 'place'],
      where: {
        order_owner_id: orderNumber
      },
      order: [['anjeo_light_id', 'ASC']]
    });

    const anjeosLightQuantity = anjeosLightCreated.length;
    res.render('listHeavy',
    {
      anjeosLightCreated: anjeosLightCreated,
      orderNumber: orderNumber,
      anjeosLightQuantity: anjeosLightQuantity
    });
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de anjeos livianos creados', err.message);
    next(boomError);
  }
};
