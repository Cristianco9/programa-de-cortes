import { getConnection } from '../libraries/DBConnection.js';
import  Boom from '@hapi/boom';

const pool = await getConnection();

export const orderActions = async (req, res, next) => {

  // temporal
  const user_owner_email = "admin@gmail.com";

  try {
    const [ currentOrder ] = await pool.query("SELECT order_id FROM orders WHERE user_owner_email = $1 ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
    const orderNumber = currentOrder[0].order_id;
    res.render('orderActions', { orderNumber: orderNumber });
  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible verificar el número de la orden en la base de datos', err);
    next(boomError);
  }
};
