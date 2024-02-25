import AnjeoLight from '../db/models/anjeoLightModel.js';
import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const createAnejoLight = async (req, res, next) => {

  // temporal
  const userOwnerID = 1;

  const anjeoLight = {
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
    const currentOrder = await Order.findOne({
      attributes: ['id'],
      where: {
        userOwnerID: userOwnerID
      },
      order: [['dateCreation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder ? currentOrder.id : null;

    try {
      const insertAnjeoLight = await AnjeoLight.create({
        orderOwnerID: orderNumber,
        dateCreation: new Date(),
        color: anjeoLight.color,
        profileType: anjeoLight.perfil,
        opening: anjeoLight.apertura,
        place: anjeoLight.lugar,
        width: anjeoLight.ancho,
        height: anjeoLight.altura,
        guide: anjeoLight.guias,
        installation: anjeoLight.instalacion,
        divisorHigh: anjeoLight.alturaDivisor,
        angle: anjeoLight.angulo,
        notes: anjeoLight.notas
      });

      return res.render('orderActions', { orderNumber });
      } catch (err) {
        const boomError = Boom.serverUnavailable(
          'No es posible crear el anjeo liviano en la base de datos', err);
        next(boomError);
      };
  } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible verificar el número de la orden en la base de datos',
        err);
      next(boomError);
  }
};
