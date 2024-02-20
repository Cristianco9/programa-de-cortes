import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const pool = await getConnection();

export const editAnjeoLight = async (req, res, next) => {
  // temporal
  const user_owner_email = "admin@gmail.com";
  const result = await pool.query("SELECT order_id FROM orders WHERE user_owner_email = $1 ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const rows = result.rows;
  const orderNumber = rows[0].order_id;
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM anjeos_light WHERE anjeo_light_id = $1", [id]);
    const anjeoToEdit = result.rows[0];
    res.render('editFormLight', { anjeoToEdit: anjeoToEdit, orderNumber: orderNumber });
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible renderizar el formulario de edición de un anjeo liviano', err);
    next(boomError);
  }
};
