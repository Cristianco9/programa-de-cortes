import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const client = await getConnection();

export const deleteAnjeoHeavy = async (req, res, next) => {

  // temporal
  const user_owner_email = "admin@gmail.com";
  const result = await client.query("SELECT order_id FROM orders WHERE user_owner_email = $1 ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const rows = result.rows;
  const orderNumber = rows[0].order_id;
  const { id } = req.params;

  try {
    const deleteRecord = await client.query("DELETE FROM anjeos_heavy WHERE anjeo_heavy_id = $1", [id]);
    const result = await client.query("SELECT anjeo_heavy_id, place FROM  anjeos_heavy WHERE order_owner_id = $1 ORDER BY anjeo_heavy_id ASC;", [orderNumber]);
    const anjeosCreated = result.rows;
    const anjeosHeavyQuantity = anjeosCreated.length;
    res.render('listHeavy',  { anjeosCreated: anjeosCreated, orderNumber: orderNumber, anjeosHeavyQuantity: anjeosHeavyQuantity });
  } catch (err) {
    const boomError = Boom.serverUnavailable('No es posible eliminar el anjeo pesado de la base de datos', err);
    next(boomError);
  }
};
