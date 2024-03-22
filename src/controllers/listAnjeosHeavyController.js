import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { Order } from '../db/models/orderModel.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import Boom from '@hapi/boom';

export const listAnjeosHeavy = async (req, res, next) => {

  const userOwnerID = getUserIdFromCookie(req);

  try {
    const currentOrder = await Order.findOne({
      attributes: ['id'],
      where: {
        userOwnerID: userOwnerID
      },
      order: [['dateCreation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder ? currentOrder.id : null;

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
      'No es posible verificar el número de la orden en la base de datos',
      err);
    next(boomError);
  }
};
