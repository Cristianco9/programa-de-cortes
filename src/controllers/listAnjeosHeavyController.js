import { pool } from '../DBConnection.js';

export const listAnjeosHeavy = async (req, res) => {
// temporal
const user_owner_email = "admin@gmail.com";
const [rows] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
const orderNumber = rows[0].order_id;

try {
const [anjeosCreated] = await pool.query("SELECT `anjeo_heavy_id`, `place` FROM  `anjeos_heavy` WHERE order_owner_id = ?;", [orderNumber]);
const anjeosheavyQuantity = anjeosCreated.length;
res.render('listHeavy', { anjeosCreated: anjeosCreated, orderNumber: orderNumber, anjeosHeavyQuantity: anjeosheavyQuantity });
} catch (err) {
res.status(500).render('</ error del servidor, al renderizar la vista de anjeos pesados creados >');
}
};
