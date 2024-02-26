import { Order } from '../db/models/orderModel.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const listAnjeosLight = async (req, res, next) => {

  // temporal
  const userOwnerID = 1;

  try {
    const currentOrder = await Order.findOne({
      attributes: ['id'],
      where: {
        userOwnerID: userOwnerID
      },
      order: [['date_creation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder ? currentOrder.id : null;

    try {
      const anjeosLightCreated = await AnjeoLight.findAll({
        attributes: ['anjeoLightID', 'place'],
        where: {
          orderOwnerID: orderNumber
        },
        order: [['anjeoLightID', 'ASC']]
      });

      const anjeosLightQuantity = anjeosLightCreated.length;
      res.render('listLight',
      {
        anjeosLightCreated: anjeosLightCreated,
        orderNumber: orderNumber,
        anjeosLightQuantity: anjeosLightQuantity
      });
    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible renderizar la vista de anjeos livianos creados', err);
      next(boomError);
    }

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de daatos',
      err);
    next(boomError);
  }
};
