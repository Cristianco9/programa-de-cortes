import AnjeoLight from '../db/models/anjeoLightModel.js';
import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const deleteAnjeoLight = async (req, res, next) => {

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
    const deleteRecord = await AnjeoLight.destroy({
      where: {
        anjeo_light_id: orderNumber
      }
    });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible eliminar el anjeo liviano de la base de datos',
      err.message);
    next(boomError);
  }

  try {
    const result = await AnjeosLight.findAll({
      attributes: ['anjeo_light_id', 'place'],
      where: {
        order_owner_id: orderNumber
      },
      order: [['anjeo_light_id', 'ASC']]
    });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible listar los anjeos livianos del pedido:', orderNumber,
      err,message);
    next(boomError);
  }

    const anjeosCreated = result.map(row => row.toJSON());
    const anjeosLightQuantity = anjeosCreated.length;

    res.render('listLight',
    {
      anjeosCreated: anjeosCreated,
      orderNumber: orderNumber,
      anjeosLightQuantity: anjeosLightQuantity
    });
};
