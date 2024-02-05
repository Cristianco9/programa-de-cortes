import { pool } from '../DBConnection.js';

export const formHeavy = async (req, res) => {

  // temporal
  const user_owner_email = "admin@gmail.com";

  try {
      const [currentOrder] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
      res.render('formHeavy', { orderID: currentOrder });
  } catch (err) {
      console.log("error al traer la ultima ordern de la base de datos", err)
      return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
  }
};
