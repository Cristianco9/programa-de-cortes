import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const listAnjeosLight = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

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
      `No es posible verificar el número de la orden en los datos enviados
      por el cliente`,
      err);
    next(boomError);
  }
};
