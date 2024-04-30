import { AnjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

export const updateAnjeoLight = async (req, res, next) => {

  const anjeoLightIdToUpdate = req.params.id;

  const newAnjeoLight = {
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
    angulo: req.body.angulo,
    notas: req.body.notas
  };

  try {

    const updateAnjeoLight = await AnjeoLight.update({
      dateCreation: new Date(),
      color: newAnjeoLight.color,
      profileType: newAnjeoLight.perfil,
      opening: newAnjeoLight.apertura,
      place: newAnjeoLight.lugar,
      width: newAnjeoLight.ancho,
      widthOptional: newAnjeoLight.anchoOpcional,
      height: newAnjeoLight.altura,
      guide: newAnjeoLight.guia,
      installation: newAnjeoLight.instalacion,
      divisorHigh: newAnjeoLight.alturaDivisor,
      divisorQuantity: newAnjeoLight.cantidadDivisor,
      angle: newAnjeoLight.angulo,
      notes: newAnjeoLight.notas
    }, {
      where: {
        anjeoLightID: anjeoLightIdToUpdate
      }
    });

    return res.render('anjeoLightUpdatedSuccessfully');

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible actualizar el anjeo liviano', err);
    next(boomError);
  }
};
