import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import Boom from '@hapi/boom';

export const duplicateAnjeoHeavy = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    try {
      const anjeoToDuplicate = await AnjeoHeavy.findOne({
        where: {
          orderOwnerID: orderNumber
        },
        order: [['dateCreation', 'DESC']],
        limit: 1
      });

      if (!anjeoToDuplicate) {
        return res.render('DuplicatedHeavyInvalid')
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
        `No es posible verificar el número de la orden en los datos enviados
        por el cliente`,
        err);
      next(boomError);
  }

};
