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
    altura: req.body.altura,
    guias: req.body.guias,
    instalacion: req.body.instalacion,
    alturaDivisor: req.body.alturaDivisor,
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
      height: newAnjeoLight.altura,
      guide: newAnjeoLight.guias,
      installation: newAnjeoLight.instalacion,
      divisorHigh: newAnjeoLight.alturaDivisor,
      angle: newAnjeoLight.angulo,
      notes: newAnjeoLight.notas
    }, {
      where: {
        anjeoLightID: anjeoLightIdToUpdate
      }
    });

    return res.render('anjeoLightUpdatedSucessfully');

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible actualizar el anjeo liviano', err);
    next(boomError);
  }
};
