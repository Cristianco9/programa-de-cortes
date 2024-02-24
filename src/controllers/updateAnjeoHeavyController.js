import AnjeoHeavy from '../db/models/anjeoheavyModel.js';
import Boom from '@hapi/boom';

export const updateAnjeoHeavy = async (req, res, next) => {

  const anjeoHeavydToUpdate = req.params.id;

  const newAnjeoHeavy = {
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

    const updateAnjeoHeavy = await AnjeoHeavy.update({
      date_creation: new Date(),
      color: newAnjeoHeavy.color,
      profile_type: newAnjeoHeavy.perfil,
      opening: newAnjeoHeavy.apertura,
      place: newAnjeoHeavy.lugar,
      width: newAnjeoHeavy.ancho,
      height: newAnjeoHeavy.altura,
      head: newAnjeoHeavy.cabezal,
      adaptador: newAnjeoHeavy.adaptador,
      top_profile: newAnjeoHeavy.perfilSuperior,
      installation: newAnjeoHeavy.instalacion,
      divisorHigh: newAnjeoHeavy.alturaDivisor,
      type_handle: newAnjeoHeavy.manija,
      open_direction: newAnjeoHeavy.lado,
      notes: newAnjeoHeavy.notas
    }, {
      where: {
        anjeo_heavy_id: anjeoHeavydToUpdate
      }
    });
    return res.render('anjeoHeavyUpdatedSucessfully');

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible actualizar el anjeo pesado',err.message);
    next(boomError);
  }
};
