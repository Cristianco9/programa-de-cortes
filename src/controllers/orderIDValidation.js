import { pool } from '../DBConnection.js';
import { Boom } from '@hapi/boom';

export const orderIDValidation = async (req, res, next) => {

  //temporal
  const userName = "admin";
  const orderInput = req.body.orderNumber;
  const orderNumber = Math.floor(orderInput);

  try {

    const [rows] = await pool.query("SELECT * FROM users WHERE user_name = ?", [userName]);

    if (rows.length === 0) {
      const boomError = Boom.notFound('Usuario incorrecto o inexistente, por favor verifiquelo e intentelo de nuevo', err);
      next(boomError);
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
        const boomError = Boom.serverUnavailable('No es posible verificar el número de la orden en la base de daatos', err);
        next(boomError);
      }
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible crear el pedido en la base de datos', err);
    next(boomError);
  }
};
