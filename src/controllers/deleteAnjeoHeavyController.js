import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const deleteAnjeoHeavy = async (req, res, next) => {

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
      const deleteRecord = await AnjeoHeavy.destroy({
        where: {
          anjeoHeavyID: id
        }
      });

      try {
        const result = await AnjeoHeavy.findAll({
          attributes: ['anjeoHeavyID', 'place'],
          where: {
            order_owner_id: orderNumber
          },
          order: [['anjeoHeavyID', 'ASC']]
        });

        const anjeosHeavyCreated = result;
        const anjeosHeavyQuantity = anjeosHeavyCreated.length;

        res.render('listHeavy',
        {
          anjeosHeavyCreated: anjeosHeavyCreated,
          orderNumber: orderNumber,
          anjeosHeavyQuantity: anjeosHeavyQuantity
        });

      } catch (err) {
        const boomError = Boom.serverUnavailable(
          'No es posible listar los anjeos pesados del pedido:',
          err);
        next(boomError);
      }

    } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible eliminar el anjeo pesado de la base de datos',
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
