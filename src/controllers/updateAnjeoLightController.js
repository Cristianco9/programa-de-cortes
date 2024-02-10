import { pool } from '../DBConnection.js';
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
    const updateAnjeoLight = await pool.query("UPDATE `anjeos_light` SET `date_creation` = NOW(), `color` = ?, `profile_type` = ?, `opening` = ?, `place` = ?, `width` = ?, `height` = ?, `guide` = ?, `installation` = ?, `divisorHigh` = ?, `angle` = ?, `notes` = ? WHERE `anjeo_light_id` = ?", [newAnjeoLight.color, newAnjeoLight.perfil, newAnjeoLight.apertura, newAnjeoLight.lugar, newAnjeoLight.ancho, newAnjeoLight.altura, newAnjeoLight.guias, newAnjeoLight.instalacion, newAnjeoLight.alturaDivisor, newAnjeoLight.angulo, newAnjeoLight.notas, anjeoLightIdToUpdate]);
    return res.render('anjeoLightUpdatedSucessfully');

  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible actualizar el anjeo liviano', err);
    next(boomError);
  }
};
