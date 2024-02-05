import { pool } from '../DBConnection.js';

export const order = async (req, res) => {
  try {
      res.render('order');
  } catch {
      res.status(500).render('</ error del servidor >');
  }
};

export const orderIDValidation = async (req, res) => {

  //temporal
  const userName = "admin";
  const orderInput = req.body.orderNumber;
  const orderNumber = Math.floor(orderInput);

  try {
      const [rows] = await pool.query("SELECT * FROM users WHERE user_name = ?", [userName]);

      if (rows.length === 0) {
          return res.status(401).json({ message: 'usuario incorrecto o inexistente' });
      }

      const currentUser = rows[0];

      try {
          const [orders] = await pool.query("SELECT `order_id` FROM `orders` WHERE user_owner_email = ?", [currentUser.user_email]);

          let orderExist = false;
          for (const order of orders) {
              if (order.order_id === orderNumber) {
                  orderExist = true;
                  break;
              }
          }

          if (orderExist) {
              return res.render('orderActions', {orderNumber: orderNumber} );
          } else {
              const createOrder = await pool.query("INSERT INTO `orders` (`user_owner_email`, `order_id`, `date_creation`) VALUES (?, ?, NOW())", [currentUser.user_email, orderNumber]);
              return res.render('type');
          };
      } catch (err) {
          console.log("error al momento de comparar sí la orden existe en la base de datos: ", err);
          return res.status(500).json({ message: 'Error interno del servidor' });
      }
  } catch (err) {
      console.error('Error al guardar el número de pedido:', err);
      return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const orderActions = async (req, res) => {

  // temporal
  const user_owner_email = "admin@gmail.com";

  try {
      const [currentOrder] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
      const orderNumber = currentOrder[0].order_id;
      res.render('orderActions', { orderNumber: orderNumber });
  } catch (err) {
      console.log("error al traer la ultima ordern de la base de datos", err)
      return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
  }
};
