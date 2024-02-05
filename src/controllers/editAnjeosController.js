import { pool } from '../DBConnection.js';

export const editAnjeoLight = async (req, res) => {
  // temporal
  const user_owner_email = "admin@gmail.com";
  const [rows] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const orderNumber = rows[0].order_id;
  const { id } = req.params;

try {
  const [result] = await pool.query("SELECT * FROM `anjeos_light` WHERE `anjeo_light_id` = ?", [id]);
  res.render('editFormLight', { anjeoToEdit: result[0], orderNumber: orderNumber });
} catch (err) {
  res.status(500).render('</ error del servidor, al renderizar la vista de edición anjeo liviano creado >');
}
};

export const editAnjeoHeavy = async (req, res) => {
  // temporal
  const user_owner_email = "admin@gmail.com";
  const [rows] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
  const orderNumber = rows[0].order_id;
  const { id } = req.params;

try {
  const [result] = await pool.query("SELECT * FROM `anjeos_heavy` WHERE `anjeo_heavy_id` = ?", [id]);
  res.render('editFormHeavy', { anjeoToEdit: result[0], orderNumber: orderNumber });
} catch (err) {
  res.status(500).render('</ error del servidor, al renderizar la vista de edición anjeo liviano creado >');
}
};
