import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const createAnejoLight = async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    const anjeoLight = {
      color: req.body.color,
      perfil: req.body.perfil,
      apertura: req.body.apertura,
      lugar: req.body.lugar,
      ancho: req.body.ancho,
      anchoOpcional: req.body.anchoOpcional,
      altura: req.body.altura,
      guia: req.body.guia,
      instalacion: req.body.instalacion,
      alturaDivisor: req.body.alturaDivisor,
      cantidadDivisor: req.body.cantidadDivisor,
      orientacionDivisor: req.body.orientacionDivisor,
      angulo: req.body.angulo,
      notas: req.body.notas
    };

    try {

      const insertAnjeoLight = await AnjeoLight.create({
        orderOwnerID: orderNumber,
        dateCreation: new Date(),
        color: anjeoLight.color,
        profileType: anjeoLight.perfil,
        opening: anjeoLight.apertura,
        place: anjeoLight.lugar,
        width: anjeoLight.ancho,
        widthOptional: anjeoLight.anchoOpcional,
        height: anjeoLight.altura,
        guide: anjeoLight.guia,
        installation: anjeoLight.instalacion,
        divisorHigh: anjeoLight.alturaDivisor,
        divisorQuantity: anjeoLight.cantidadDivisor,
        divisorOrientation: anjeoLight.orientacionDivisor,
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
        `No es posible verificar el número de la orden en los datos enviados
        por el cliente`,
        err);
      next(boomError);
  }
};
