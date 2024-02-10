import { pool } from '../DBConnection.js';
import Boom from '@hapi/boom';

export const formLight = async (req, res, next) => {

  // temporal
  const user_owner_email = "admin@gmail.com";

  try {
    const [currentOrder] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
    res.render('formLight', { orderID: currentOrder });
  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible verificar el número de la orden en la base de datos', err);
    next(boomError);
  }
};
