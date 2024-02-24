import AnjeoHeavy from '../db/models/anjeoHeavyModel.js';
import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const editAnjeoHeavy = async (req, res, next) => {
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
    const anjeoToEdit = await AnjeoHeavy.findOne({
      where: {
        anjeo_heavy_id: id
      }
    });

    if (!anjeoToEdit) {
      const boomError = Boom.notFound(
        'No es posible encontrar el anjeo pesado en la base de datos');
      next(boomError);
    }

    res.render('editFormHeavy',
      {
        anjeoToEdit: anjeoToEdit,
        orderNumber: orderNumber
      });
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar el formulario de edición de un anjeo liviano',
      err.message);
    next(boomError);
  }
};
