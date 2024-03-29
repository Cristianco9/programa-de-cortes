import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import { Order } from '../db/models/orderModel.js';
import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import Boom from '@hapi/boom';

export const recordLightDuplicate = async (req, res, next) => {

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

    const orderNumber = currentOrder.id ? currentOrder.id : null;

    const anjeoLightToDuplicate = {
      color: req.body.color,
      perfil: req.body.perfil,
      apertura: req.body.apertura,
      lugar: req.body.lugar,
      ancho: req.body.ancho,
      altura: req.body.altura,
      guias: req.body.guias,
      instalacion: req.body.instalacion,
      alturaDivisor: req.body.alturaDivisor,
      angulo: req.body.angulo,
      notas: req.body.notas
    };

    try {

      const duplicateAnjeoLight = await AnjeoLight.create({
        orderOwnerID: orderNumber,
        dateCreation: new Date(),
        color: anjeoLightToDuplicate.color,
        profileType: anjeoLightToDuplicate.perfil,
        opening: anjeoLightToDuplicate.apertura,
        place: anjeoLightToDuplicate.lugar,
        width: anjeoLightToDuplicate.ancho,
        height: anjeoLightToDuplicate.altura,
        guide: anjeoLightToDuplicate.guias,
        installation: anjeoLightToDuplicate.instalacion,
        divisorHigh: anjeoLightToDuplicate.alturaDivisor,
        angle: anjeoLightToDuplicate.angulo,
        notes: anjeoLightToDuplicate.notas
      });

      return res.render('anjeoLightDuplicatedSuccessfully');

    } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible crear el anjeo liviano', err);
      next(boomError);
    }

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de datos',
      err);
    next(boomError);
  }
};
