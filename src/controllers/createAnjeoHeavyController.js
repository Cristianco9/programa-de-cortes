import { pool } from '../DBConnection.js';
import { Boom } from '@hapi/boom';

export const createAnjeoHeavy = async (req, res, next) => {

  // temporal
  const user_owner_email = "admin@gmail.com";
  const order_owner_id = 369;
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

  const [rows] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const orderNumber = rows[0].order_id;

  try {
    const insertAnjeoHeavy = await pool.query("INSERT INTO `anjeos_heavy` (`order_owner_id`, `date_creation`, `anjeo_color`, `profile_type`, `opening`, `place`, `width`, `height`, `head`, `adaptador`, `top_profile`, `installation`, `divisorHigh`, `type_handle`, `open_direction`, `notes`) VALUES (?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [orderNumber, anjeoHeavy.color, anjeoHeavy.perfil, anjeoHeavy.apertura, anjeoHeavy.lugar, anjeoHeavy.ancho, anjeoHeavy.altura, anjeoHeavy.cabezal, anjeoHeavy.adaptador, anjeoHeavy.perfilSuperior, anjeoHeavy.instalacion, anjeoHeavy.alturaDivisor, anjeoHeavy.manija, anjeoHeavy.lado, anjeoHeavy.notas]);
    return res.render('orderActions', { orderNumber: orderNumber });
  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible crear el anjeo pesado en la base de datos', err);
    next(boomError);
  }
};
