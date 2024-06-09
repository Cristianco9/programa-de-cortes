import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import Boom from '@hapi/boom';

export const recordHeavyDuplicate = async (req, res, next) => {


  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    const anjeoHeavyToDuplicate = {
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

      const duplicateAnjeoLight = await AnjeoHeavy.create({
        orderOwnerID: orderNumber,
        dateCreation: new Date(),
        color: anjeoHeavyToDuplicate.color,
        profileType: anjeoHeavyToDuplicate.perfil,
        opening: anjeoHeavyToDuplicate.apertura,
        place: anjeoHeavyToDuplicate.lugar,
        width: anjeoHeavyToDuplicate.ancho,
        height: anjeoHeavyToDuplicate.altura,
        rielLower: anjeoHeavyToDuplicate.rielInferior,
        rielUpper: anjeoHeavyToDuplicate.rielSuperior,
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
      'No es posible verificar los datos enviados por el cliente',
      err);
    next(boomError);
  }
};
