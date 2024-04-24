import { getUserIdFromCookie } from '../utils/auth/tokenData.js';
import { Order } from '../db/models/orderModel.js';
import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import { AnjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import { applyDiscountsLight } from '../services/cuttingOrderServices.js'
import  Boom from '@hapi/boom';

export const cuttingOrder =  async (req, res, next) => {

  const userOwnerID = getUserIdFromCookie(req);

  try {
    const currentOrder = await Order.findOne({
      where: {
        userOwnerID: userOwnerID
      },
      order: [['dateCreation', 'DESC']],
      limit: 1
    });

    const orderNumber = currentOrder ? currentOrder.id : null;

    try {
      const anjeosLightCreated = await AnjeoLight.findAll({
        attributes: [
          'orderOwnerID',
          'anjeoLightID',
          'dateCreation',
          'color',
          'profileType',
          'opening',
          'place',
          'width',
          'height',
          'guide',
          'installation',
          'divisorHigh',
          'angle',
          'notes'

        ],
        where: {
          orderOwnerID: orderNumber
        },
        order: [['anjeoLightID', 'ASC']]
      });

      const anjeosLightData = anjeosLightCreated.map(anjeo => anjeo.dataValues);

      try {
        const anjeosHeavyCreated = await AnjeoHeavy.findAll({
          attributes: [
            'orderOwnerID',
            'anjeoHeavyID',
            'dateCreation',
            'color',
            'profileType',
            'opening',
            'place',
            'width',
            'height',
            'head',
            'adaptador',
            'topProfile',
            'installation',
            'divisorHigh',
            'typeHandle',
            'openDirection',
            'notes'

          ],
          where: {
            orderOwnerID: orderNumber
          },
          order: [['anjeoHeavyID', 'ASC']]
        });

        const anjeosHeavyData = anjeosHeavyCreated.map(anjeo => anjeo.dataValues);

        console.log("anjeos pesados:");
        console.log(anjeosHeavyData);

        try {
          const anjeosLightModified = await applyDiscountsLight(anjeosLightData);

          try {
            // aquí continuo!!!!

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
      'No es posible verificar el número de la orden en la base de datos',
      err.message);
    next(boomError);
  }
}
