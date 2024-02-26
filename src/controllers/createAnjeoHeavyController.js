import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

export const createAnjeoHeavy = async (req, res, next) => {

  // temporal
  const userOwnerID = 1;

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
        userOwnerID: userOwnerID
      },
      order: [['dateCreation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder ? currentOrder.id : null;

    try {
      const insertAnjeoHeavy = await AnjeoHeavy.create({
        orderOwnerID: orderNumber,
        dateCreation: new Date(),
        color: anjeoHeavy.color,
        profileType: anjeoHeavy.perfil,
        opening: anjeoHeavy.apertura,
        place: anjeoHeavy.lugar,
        width: anjeoHeavy.ancho,
        height: anjeoHeavy.altura,
        head: anjeoHeavy.cabezal,
        adaptador: anjeoHeavy.adaptador,
        topProfile: anjeoHeavy.perfilSuperior,
        installation: anjeoHeavy.instalacion,
        divisorHigh: anjeoHeavy.alturaDivisor,
        typeHandle: anjeoHeavy.manija,
        openDirection: anjeoHeavy.lado,
        notes: anjeoHeavy.notas
      });

      return res.render('orderActions', { orderNumber });
    } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible crear el anjeo pesado en la base de datos' ,err);
      next(boomError);
    };
  } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible verificar el número de la orden en la base de datos',
        err);
      next(boomError);
  }
};
