import AnjeoHeavy from '../db/models/anjeoHeavyModel.js';
import Order from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const createAnjeoHeavy = async (req, res, next) => {

  // temporal
  const userOwnerEmail = "admin@gmail.com";

  const anjeoHeavy = {
    color: req.body.color,
    perfil: req.body.perfil,
    apertura: req.body.apertura,
    lugar: req.body.lugar,
    ancho: req.body.ancho,
    altura: req.body.altura,
    cabezal: req.body.cabezal,
    adaptador: req.body.adaptador,
    perfilSuperior: req.body.perfilSuperior,
    instalacion: req.body.instalacion,
    alturaDivisor: req.body.alturaDivisor,
    manija: req.body.manija,
    lado: req.body.lado,
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
    const insertAnjeoHeavy = await AnjeosHeavy.create({
      order_owner_id: orderNumber,
      date_creation: new Date(),
      color: anjeoHeavy.color,
      profile_type: anjeoHeavy.perfil,
      opening: anjeoHeavy.apertura,
      place: anjeoHeavy.lugar,
      width: anjeoHeavy.ancho,
      height: anjeoHeavy.altura,
      head: anjeoHeavy.cabezal,
      adaptador: anjeoHeavy.adaptador,
      top_profile: anjeoHeavy.perfilSuperior,
      installation: anjeoHeavy.instalacion,
      divisorHigh: anjeoHeavy.alturaDivisor,
      type_handle: anjeoHeavy.manija,
      open_direction: anjeoHeavy.lado,
      notes: anjeoHeavy.notas
    });

    return res.render('orderActions', { orderNumber });
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible crear el anjeo pesado en la base de datos', err.message);
    next(boomError);
  }
};
