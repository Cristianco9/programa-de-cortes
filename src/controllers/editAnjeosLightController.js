import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const editAnjeoLight = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;
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
        `No es posible verificar el número de la orden en los datos enviados
        por el cliente`,
        err);
      next(boomError);
  }

};
