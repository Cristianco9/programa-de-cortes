import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const client = await getConnection();

export const createAnjeoHeavy = async (req, res, next) => {

  // temporal
  const user_owner_email = "admin@gmail.com";
  const anjeoHeavy = {
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

  const result = await client.query("SELECT order_id FROM orders WHERE user_owner_email = $1 ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const rows = result.rows;
  const orderNumber = rows[0].order_id;

  try {
    const insertAnjeoHeavy = await client.query("INSERT INTO anjeos_heavy (order_owner_id, date_creation, color, profile_type, opening, place, width, height, head, adaptador, top_profile, installation, divisorHigh, type_handle, open_direction, notes) VALUES ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)", [orderNumber, anjeoHeavy.color, anjeoHeavy.perfil, anjeoHeavy.apertura, anjeoHeavy.lugar, anjeoHeavy.ancho, anjeoHeavy.altura, anjeoHeavy.cabezal, anjeoHeavy.adaptador, anjeoHeavy.perfilSuperior, anjeoHeavy.instalacion, anjeoHeavy.alturaDivisor, anjeoHeavy.manija, anjeoHeavy.lado, anjeoHeavy.notas]);
    return res.render('orderActions', { orderNumber: orderNumber });
  } catch (err) {
    const boomError = Boom.serverUnavailable(`No es posible crear el anjeo pesado en la base de datos ${err.message}`);
    next(boomError);
  }
};
