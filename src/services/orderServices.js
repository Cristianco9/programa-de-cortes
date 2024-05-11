import { Order } from '../db/models/orderModel.js';
import Boom from '@hapi/boom';

/**
 * Finds a order by their ID in the database.
 * @param {number} id - The ID of the order to search for.
 * @returns {Promise} - A promise that resolves with the order record found or
 *  rejects with an error.
 */
export const findById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the order in the database
    Order.findOne({
      where: {
        id: id
      }
    })
    .then(orderRecord => {
      // If the order is found, resolve the promise with the order record
      resolve(orderRecord);
    })
    .catch(err => {
      // If an error occurs while searching for the order, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar el pedido en la base de datos', err
      );
      reject(boomError);
    });
  });
};

/**
 * Finds all orders in the database.
 * @returns {Promise} - A promise that resolves with an array of all order records
 *  found or rejects with an error.
 */
export const findAllOrders = () => {
  return new Promise((resolve, reject) => {
    // Find all orders in the database
    Order.findAll({
      order: [['id', 'ASC']]
    })
      .then(orders => {
        // If orders are found, resolve the promise with the array of order records
        resolve(orders);
      })
      .catch(err => {
        // If an error occurs while searching for orders, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar los pedidos en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Creates a new order in the database.
 * @param {object} orderData - An object containing the data for the new order.
 * @returns {Promise} - A promise that resolves with the newly created order
 *  record or rejects with an error.
 */
export const createOrder = (orderData) => {
  // Set the current date
  orderData.dateCreation = new Date();

  return new Promise((resolve, reject) => {
    // Create a new order in the database with the provided data
    Order.create(orderData)
      .then(newOrder => {
        // If the order is created successfully, resolve the promise with the newly created order record
        resolve(newOrder);
      })
      .catch(err => {
        // If an error occurs while creating the order, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible crear el pedido en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Deletes a order from the database by their ID.
 * @param {number} id - The ID of the order to delete.
 * @returns {Promise} - A promise that resolves when the order is deleted or
 *  rejects with an error.
 */
export const deleteOrderById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the order by their ID
    Order.findByPk(id)
      .then(orderRecord => {
        if (!orderRecord) {
          // If the order is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el pedido en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the order is found, delete them from the database
          orderRecord.destroy()
            .then(() => {
              // Resolve the promise once the order is deleted
              orderRecord.status = "Eliminado"
              resolve(orderRecord);
            })
            .catch(err => {
              // If there's an error deleting the order, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible eliminar el pedido en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the order, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el pedido en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Modifies a order's information in the database.
 * @param {number} id - The ID of the order to modify.
 * @param {object} newData - An object containing the new data to update for the order.
 * @returns {Promise} - A promise that resolves when the order's information is successfully modified or rejects with an error.
 */
export const modifyOrder = (id,newData) => {
  return new Promise((resolve, reject) => {
    // Find the order by their ID
    Order.findByPk(id)
      .then(orderRecord => {
        if (!orderRecord) {
          // If the order is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el pedido en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {

          // Set the current date
          newData.dateCreation = new Date();
          // If the order is found, update their information with the new data
          orderRecord.update(newData)
            .then(() => {
              // Resolve the promise once the order's information is successfully modified
              orderRecord.status = 'Modificado'
              resolve(orderRecord);
            })
            .catch(err => {
              // If there's an error updating the order's information, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible actualizar el pedido en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the order, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el pedido en la base de datos', err
        );
        reject(boomError);
      });
  });
};
