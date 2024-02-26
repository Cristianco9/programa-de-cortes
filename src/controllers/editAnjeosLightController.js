import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const editAnjeoLight = async (req, res, next) => {

  // temporal
  const userOwnerID = 1;

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

    const { id } = req.params;

    try {
      const anjeoToEdit = await AnjeoLight.findOne({
        where: {
          anjeoLightID: id
        }
      });

      if (!anjeoToEdit) {
        const boomError = Boom.notFound(
          'No es posible encontrar el anjeo liviano en la base de datos');
        next(boomError);
      }

      res.render('editFormLight',
        {
          anjeoToEdit: anjeoToEdit,
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
        'No es posible verificar el número de la orden en la base de datos',
        err);
      next(boomError);
  }

};
