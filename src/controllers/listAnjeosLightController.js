import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const pool = await getConnection();

export const listAnjeosLight = async (req, res, next) => {
  // temporal
  const user_owner_email = "admin@gmail.com";
  const result = await pool.query("SELECT order_id FROM orders WHERE user_owner_email = $1 ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const rows = result.rows;
  const orderNumber = rows[0].order_id;

  try {
    const result = await pool.query("SELECT anjeo_light_id, place FROM anjeos_light WHERE order_owner_id = $1 ORDER BY anjeo_light_id ASC;", [orderNumber]);
    const anjeosCreated = result.rows;
    const anjeosLightQuantity = anjeosCreated.length;
    res.render('listLight', { anjeosCreated: anjeosCreated, orderNumber: orderNumber, anjeosLightQuantity: anjeosLightQuantity });
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible renderizar la vista de anjeos livianos creados', err);
    next(boomError);
  }
};
