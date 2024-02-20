import { getConnection } from '../libraries/DBConnection.js';
import Boom from '@hapi/boom';

const pool = await getConnection();

export const orderIDValidation = async (req, res, next) => {

  //temporal
  const userName = "admin";
  const orderInput = req.body.orderNumber;
  const orderNumber = Math.floor(orderInput);

  try {

    const result = await pool.query("SELECT * FROM users WHERE name = $1", [userName]);
    const rows = result.rows;

    if (rows.length === 0) {
      const boomError = Boom.notFound('Usuario incorrecto o inexistente, por favor verifiquelo e intentelo de nuevo');
      next(boomError);
    }

    const currentUser = rows[0];

    try {

      const ordersSearch = await pool.query("SELECT order_id FROM orders WHERE user_owner_email = $1", [currentUser.email]);
      const orders = ordersSearch.rows;

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
        const createOrder = await pool.query("INSERT INTO orders (user_owner_email, order_id, date_creation, status) VALUES ($1, $2, CURRENT_TIMESTAMP, 'creado')", [currentUser.email, orderNumber]);
        return res.render('type');
      };
      } catch (error) {
        const boomError = Boom.serverUnavailable('No es posible verificar el número de la orden en la base de daatos', error);
        next(boomError);
      }
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible crear el pedido en la base de datos', err);
    next(boomError);
  }
};
