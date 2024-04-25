import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const deleteAnjeoLight = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;
    const { id } = req.params;

    try {
      const deleteRecord = await AnjeoLight.destroy({
        where: {
          anjeoLightID: id
        }
      });

        try {
          const result = await AnjeoLight.findAll({
            attributes: ['anjeoLightID', 'place'],
            where: {
              orderOwnerID: orderNumber
            },
            order: [['anjeoLightID', 'ASC']]
          });

          const anjeosLightCreated = result;
          const anjeosLightQuantity = anjeosLightCreated.length;

          res.render('listLight',
          {
            anjeosLightCreated: anjeosLightCreated,
            orderNumber: orderNumber,
            anjeosLightQuantity: anjeosLightQuantity
          });

        } catch (err) {
          const boomError = Boom.serverUnavailable(
            'No es posible listar los anjeos livianos del pedido',
            err);
          next(boomError);
        }

    } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible eliminar el anjeo liviano de la base de datos',
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
}
