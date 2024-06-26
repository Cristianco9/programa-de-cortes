import { getOrderIdFromCookie } from '../utils/auth/tokenData.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { applyDiscountsLight } from '../services/anjeoLightCuttingOrderServices.js';
import { applyDiscountsHeavy } from '../services/anjeoHeavyCuttingOrderServices.js';
import  Boom from '@hapi/boom';

export const cuttingOrder =  async (req, res, next) => {

  try {
    const currentOrderID = getOrderIdFromCookie(req);
    const orderNumber = currentOrderID ? currentOrderID : null;

    try {
      const anjeosLightCreated = await AnjeoLight.findAll({
        where: {
          orderOwnerID: orderNumber
        },
        order: [['anjeoLightID', 'ASC']]
      });

      const anjeosLightData = anjeosLightCreated.map(anjeo => anjeo.dataValues);

      try {
        const anjeosHeavyCreated = await AnjeoHeavy.findAll({
          where: {
            orderOwnerID: orderNumber
          },
          order: [['anjeoHeavyID', 'ASC']]
        });

        const anjeosHeavyData = anjeosHeavyCreated.map(anjeo => anjeo.dataValues);

        try {
          const anjeosLightModified = await applyDiscountsLight(anjeosLightData);

          try {
            const anjeosHeavyModified = await applyDiscountsHeavy(anjeosHeavyData);
              console.log("anjeos pesado:");
              console.log(anjeosHeavyData);
              console.log("anjeos pesado moficado:");
              console.log(anjeosHeavyModified);
          } catch (err) {
            const boomError = Boom.notImplemented(
              'No es posible aplicar los descuentos a los anjeos pesados', err);
            next(boomError);
          }
        } catch (err) {
          const boomError = Boom.notImplemented(
            'No es posible aplicar los descuentos a los anjeos livianos', err);
          next(boomError);
        }

      } catch (err) {
        const boomError = Boom.notImplemented(
          'No es posible consultar los anjeos pesados creados', err);
        next(boomError);
      }

    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible consultar los anjeos livianos creados', err);
      next(boomError);
    }

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      `No es posible verificar el número de la orden en los datos enviados
      por el cliente`,
      err.message);
    next(boomError);
  }
}
