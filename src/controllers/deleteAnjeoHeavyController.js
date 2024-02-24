import AnjeoHeavy from '../db/models/anjeoHeavyModel.js';
import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const deleteAnjeoHeavy = async (req, res, next) => {

  // temporal
  const userOwnerEmail = "admin@gmail.com";

  try {
    const currentOrder = await Order.findOne({
      attributes: ['id'],
      where: {
        user_owner_email: userOwnerEmail
      },
      order: [['dateCreation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder.id ? currentOrder.id : null;
  } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible verificar el número de la orden en la base de datos',
        err.message);
      next(boomError);
  }

  const { id } = req.params;

  try {
    const deleteRecord = await AnjeoHeavy.destroy({
      where: {
        anjeo_heavy_id: orderNumber
      }
    });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible eliminar el anjeo pesado de la base de datos',
      err.message);
    next(boomError);
  }

  try {
    const result = await AnjeoHeavy.findAll({
      attributes: ['anjeo_heavy_id', 'place'],
      where: {
        order_owner_id: orderNumber
      },
      order: [['anjeo_heavy_id', 'ASC']]
    });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible listar los anjeos pesados del pedido:', orderNumber,
      err,message);
    next(boomError);
  }

    const anjeosCreated = result.map(row => row.toJSON());
    const anjeosHeavyQuantity = anjeosCreated.length;

    res.render('listHeavy',
    {
      anjeosCreated: anjeosCreated,
      orderNumber: orderNumber,
      anjeosHeavyQuantity: anjeosHeavyQuantity
    });
};
