import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { Order } from '../db/models/orderModel.js';
import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import Boom from '@hapi/boom';

export const recordHeavyDuplicate = async (req, res, next) => {

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

    const anjeoHeavyToDuplicate = {
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

      const duplicateAnjeoLight = await AnjeoHeavy.create({
        orderOwnerID: orderNumber,
        dateCreation: new Date(),
        color: anjeoHeavyToDuplicate.color,
        profileType: anjeoHeavyToDuplicate.perfil,
        opening: anjeoHeavyToDuplicate.apertura,
        place: anjeoHeavyToDuplicate.lugar,
        width: anjeoHeavyToDuplicate.ancho,
        height: anjeoHeavyToDuplicate.altura,
        head: anjeoHeavyToDuplicate.cabezal,
        adaptador: anjeoHeavyToDuplicate.adaptador,
        topProfile: anjeoHeavyToDuplicate.perfilSuperior,
        installation: anjeoHeavyToDuplicate.instalacion,
        divisorHigh: anjeoHeavyToDuplicate.alturaDivisor,
        typeHandle: anjeoHeavyToDuplicate.manija,
        openDirection: anjeoHeavyToDuplicate.lado,
        notes: anjeoHeavyToDuplicate.notas
      });

      return res.render('anjeoHeavyDuplicatedSuccessfully');

    } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible crear el anjeo pesado', err);
      next(boomError);
    }

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible verificar el número de la orden en la base de datos',
      err);
    next(boomError);
  }
};
