import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const client = await getConnection();

export const listAnjeosHeavy = async (req, res, next) => {
// temporal
const user_owner_email = "admin@gmail.com";
const result = await client.query("SELECT order_id FROM orders WHERE user_owner_email = $1 ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
const rows = result.rows;
const orderNumber = rows[0].order_id;

  try {
    const result = await client.query("SELECT anjeo_heavy_id, place FROM anjeos_heavy WHERE order_owner_id = $1 ORDER BY anjeo_heavy_id ASC;", [orderNumber]);
    const anjeosCreated = result.rows;
    const anjeosheavyQuantity = anjeosCreated.length;
    res.render('listHeavy', { anjeosCreated: anjeosCreated, orderNumber: orderNumber, anjeosHeavyQuantity: anjeosheavyQuantity });
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible renderizar la vista de anjeos pesados creados', err);
    next(boomError);
  }
};
