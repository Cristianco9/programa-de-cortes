import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import Boom from '@hapi/boom';

export const listAnjeosHeavy = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    try {
      const anjeosHeavyCreated = await AnjeoHeavy.findAll({
        attributes: ['anjeoHeavyID', 'place'],
        where: {
          orderOwnerID: orderNumber
        },
        order: [['anjeoHeavyID', 'ASC']]
      });

      const anjeosHeavyQuantity = anjeosHeavyCreated.length;
      res.render('listHeavy',
      {
        anjeosHeavyCreated: anjeosHeavyCreated,
        orderNumber: orderNumber,
        anjeosHeavyQuantity: anjeosHeavyQuantity
      });
    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible renderizar la vista de anjeos pesados creados', err);
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
