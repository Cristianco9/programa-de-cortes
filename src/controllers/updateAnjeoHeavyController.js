import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const pool = await getConnection();

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
    const updateAnjeoHeavy = await pool.query("UPDATE anjeos_heavy SET date_creation = NOW(), color = $1, profile_type = $2, opening = $3, place = $4, width = $5, height = $6, head = $7, adaptador = $8, top_profile = $9, installation = $10, divisorHigh = $11, type_handle = $12, open_direction = $13, notes = $14 WHERE anjeo_heavy_id = $15", [newAnjeoHeavy.color, newAnjeoHeavy.perfil, newAnjeoHeavy.apertura, newAnjeoHeavy.lugar, newAnjeoHeavy.ancho, newAnjeoHeavy.altura, newAnjeoHeavy.cabezal, newAnjeoHeavy.adaptador, newAnjeoHeavy.perfilSuperior, newAnjeoHeavy.instalacion,  newAnjeoHeavy.alturaDivisor, newAnjeoHeavy.manija, newAnjeoHeavy.lado, newAnjeoHeavy.notas, anjeoHeavydToUpdate]);
    return res.render('anjeoHeavyUpdatedSucessfully');
  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible actualizar el anjeo pesado', err);
    next(boomError);
  }
};
