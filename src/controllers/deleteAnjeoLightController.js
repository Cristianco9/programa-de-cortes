import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const deleteAnjeoLight = async (req, res, next) => {

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
        'No es posible verificar el número de la orden en la base de datos',
        err);
      next(boomError);
  }
}
