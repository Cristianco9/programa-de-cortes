import { pool } from '../DBConnection.js';
import { Boom } from '@hapi/boom';

export const createAnejoLight = async (req, res, next) => {

  // temporal
  const user_owner_email = "admin@gmail.com";

  const anjeoLight = {
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

  const [rows] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const orderNumber = rows[0].order_id;

  try {
    const insertAnjeoLight = await pool.query("INSERT INTO `anjeos_light` (`order_owner_id`, `date_creation`, `anjeo_color`, `profile_type`, `opening`, `place`, `width`, `height`, `guide`, `installation`, `divisorHigh`, `angle`, `notes`) VALUES (?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [orderNumber, anjeoLight.color, anjeoLight.perfil, anjeoLight.apertura, anjeoLight.lugar, anjeoLight.ancho, anjeoLight.altura, anjeoLight.guias, anjeoLight.instalacion, anjeoLight.alturaDivisor, anjeoLight.angulo, anjeoLight.notas]);
    return res.render('orderActions', { orderNumber: orderNumber });
  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible crear el anjeo liviano en la base de datos', err);
    next(boomError);
  }
};
