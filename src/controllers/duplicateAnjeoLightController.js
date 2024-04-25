import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const duplicateAnjeoLight = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    try {
      const anjeoToDuplicate = await AnjeoLight.findOne({
        where: {
          orderOwnerID: orderNumber
        },
        order: [['dateCreation', 'DESC']],
        limit: 1
      });

      if (!anjeoToDuplicate) {
        return res.render('DuplicatedLightInvalid')
      }

      return res.render('duplicateFormLight',
        {
          anjeoToDuplicate: anjeoToDuplicate,
          orderNumber: orderNumber
        });

    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible renderizar el formulario de edición de un anjeo liviano',
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
