import AnjeoHeavy from '../db/models/anjeoHeavyModel.js';
import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const createAnejoLight = async (req, res, next) => {

  // temporal
  const userOwnerEmail = "admin@gmail.com";

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

  try {
  const insertAnjeoLight = await AnjeosLight.create({
    order_owner_id: orderNumber,
    date_creation: new Date(),
    color: anjeoLight.color,
    profile_type: anjeoLight.perfil,
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
      'No es posible crear el anjeo liviano en la base de datos', err.message);
    next(boomError);
  }
};
