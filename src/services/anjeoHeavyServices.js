import { anjeoHeavy } from '../db/models/anjeoHeavyModel.js';
import Boom from '@hapi/boom';

/**
 * Finds a anjeoHeavy by their ID in the database.
 * @param {number} id - The ID of the anjeo heavy to search for.
 * @returns {Promise} - A promise that resolves with the anjeo heavy record found
 * or rejects with an error.
 */
export const findById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the anjeo heavy in the database
    anjeoHeavy.findOne({
      where: {
        anjeoHeavyID: id
      }
    })
    .then(anjeoHeavyRecord => {
      // If the anjeoHeavy is found, resolve the promise with the anjeoHeavy record
      resolve(anjeoHeavyRecord);
    })
    .catch(err => {
      // If an error occurs while searching for the anjeoHeavy, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar el anjeo pesado en la base de datos', err
      );
      reject(boomError);
    });
  });
};

/**
 * Finds all anjeoHeavy in the database.
 * @returns {Promise} - A promise that resolves with an array of all anjeoHeavy
 *  records found or rejects with an error.
 */
export const findAllAnjeoHeavy = () => {
  return new Promise((resolve, reject) => {
    // Find all anjeoHeavy in the database
    anjeoHeavy.findAll()
      .then(anjeoHeavy => {
        // If anjeoHeavy are found, resolve the promise with the array of anjeoHeavy records
        resolve(anjeoHeavy);
      })
      .catch(err => {
        // If an error occurs while searching for anjeoHeavy, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar los anjeos pesados en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Finds all anjeoHeavy in the database for a specific order owner ID.
 * @param {number} orderOwnerID - The ID of the order owner to filter the anjeoHeavy by.
 * @returns {Promise} - A promise that resolves with an array of all anjeoHeavy
 *  records found for the specified order owner ID or rejects with an error.
 */
export const findAllAnjeoHeavyByOrderOwnerID = (orderOwnerID) => {
  return new Promise((resolve, reject) => {
    // Find all anjeoHeavy in the database where orderOwnerID matches the specified value
    anjeoHeavy.findAll({
      where: {
        orderOwnerID: orderOwnerID
      }
    })
    .then(anjeoHeavy => {
      // If anjeoHeavy are found, resolve the promise with the array of anjeoHeavy records
      resolve(anjeoHeavy);
    })
    .catch(err => {
      // If an error occurs while searching for anjeoHeavy, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar los anjeos pesados en la base de datos', err
      );
      reject(boomError);
    });
  });
};

/**
 * Creates a new anjeoHeavy in the database.
 * @param {object} anjeoHeavyData - An object containing the data for the new anjeoHeavy.
 * @returns {Promise} - A promise that resolves with the newly created anjeoHeavy
 *  record or rejects with an error.
 */
export const createAnjeoHeavy = (anjeoHeavyData) => {
  return new Promise((resolve, reject) => {
    // Create a new anjeoHeavy in the database with the provided data
    anjeoHeavy.create(anjeoHeavyData)
      .then(newAnjeoHeavy => {
        // If the anjeoHeavy is created successfully, resolve the promise with the newly created anjeoHeavy record
        resolve(newAnjeoHeavy);
      })
      .catch(err => {
        // If an error occurs while creating the anjeoHeavy, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible crear el anjeo pesado en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Deletes a anjeoHeavy from the database by their ID.
 * @param {number} id - The ID of the anjeoHeavy to delete.
 * @returns {Promise} - A promise that resolves when the anjeoHeavy is deleted or
 *  rejects with an error.
 */
export const deleteAnjeoHeavyById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the anjeoHeavy by their ID
    anjeoHeavy.findByPk(id)
      .then(anjeoHeavyRecord => {
        if (!anjeoHeavyRecord) {
          // If the anjeoHeavy is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el anjeo pesado en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the anjeoHeavy is found, delete them from the database
          anjeoHeavyRecord.destroy()
            .then(() => {
              // Resolve the promise once the anjeoHeavy is deleted
              resolve();
            })
            .catch(err => {
              // If there's an error deleting the anjeoHeavy, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible eliminar el anjeo pesado en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the anjeoHeavy, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el anjeo pesado en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Modifies a anjeoHeavy's information in the database.
 * @param {number} id - The ID of the anjeoHeavy to modify.
 * @param {object} newData - An object containing the new data to update for the anjeoHeavy.
 * @returns {Promise} - A promise that resolves when the anjeoHeavy's information is successfully modified or rejects with an error.
 */
export const modifyAnjeoHeavy = (id, newData) => {
  return new Promise((resolve, reject) => {
    // Find the anjeoHeavy by their ID
    anjeoHeavy.findByPk(id)
      .then(anjeoHeavyRecord => {
        if (!anjeoHeavyRecord) {
          // If the anjeoHeavy is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el anjeo pesado en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the anjeoHeavy is found, update their information with the new data
          anjeoHeavyRecord.update(newData)
            .then(() => {
              // Resolve the promise once the anjeoHeavy's information is successfully modified
              resolve();
            })
            .catch(err => {
              // If there's an error updating the anjeoHeavy's information, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible actualizar el anjeo pesado en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the anjeoHeavy, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el anjeo pesado en la base de datos', err
        );
        reject(boomError);
      });
  });
};
