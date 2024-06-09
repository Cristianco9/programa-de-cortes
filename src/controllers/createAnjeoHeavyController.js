import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import Boom from '@hapi/boom';

export const createAnjeoHeavy = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    const anjeoHeavy = {
      color: req.body.color,
      perfil: req.body.perfil,
      apertura: req.body.apertura,
      lugar: req.body.lugar,
      ancho: req.body.ancho,
      altura: req.body.altura,
      rielInferior: req.body.rielInferior,
      rielSuperior: req.body.rielSuperior,
      perfilSuperior: req.body.perfilSuperior,
      instalacion: req.body.instalacion,
      alturaDivisor: req.body.alturaDivisor,
      manija: req.body.manija,
      lado: req.body.lado,
      notas: req.body.notas
    };

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
        rielLower: anjeoHeavy.rielInferior,
        rielUpper: anjeoHeavy.rielSuperior,
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
        `No es posible verificar el número de la orden en los datos enviados
        por el cliente`,
        err);
      next(boomError);
  }
};
