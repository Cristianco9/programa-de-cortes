import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const duplicateAnjeoHeavy = async (req, res, next) => {

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

    const orderNumber = currentOrder.id ? currentOrder.id : null;

    try {
      const anjeoToDuplicate = await AnjeoHeavy.findOne({
        where: {
          orderOwnerID: orderNumber
        },
        order: [['dateCreation', 'DESC']],
        limit: 1
      });

      if (!anjeoToDuplicate) {
        const boomError = Boom.notFound(
          `No es posible encontrar el anjeo pesado a duplicar
          en la base de datos`);
        next(boomError);
      }

      return res.render('duplicateFormHeavy',
        {
          anjeoToDuplicate: anjeoToDuplicate,
          orderNumber: orderNumber
        });

    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible renderizar el formulario de edición de un anjeo pesado',
        err);
      next(boomError);
    }

  } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible verificar el número de la orden en la base de datos',
        err);
      next(boomError);
  }

};
