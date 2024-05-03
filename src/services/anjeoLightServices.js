import { anjeoLight } from '../db/models/anjeoLightModel.js';
import Boom from '@hapi/boom';

/**
 * Finds a anjeoLight by their ID in the database.
 * @param {number} id - The ID of the anjeo light to search for.
 * @returns {Promise} - A promise that resolves with the anjeo light record found
 * or rejects with an error.
 */
export const findById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the anjeo light in the database
    anjeoLight.findOne({
      where: {
        anjeoLightID: id
      }
    })
    .then(anjeoLightRecord => {
      // If the anjeoLight is found, resolve the promise with the anjeoLight record
      resolve(anjeoLightRecord);
    })
    .catch(err => {
      // If an error occurs while searching for the anjeoLight, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar el anjeo liviano en la base de datos', err
      );
      reject(boomError);
    });
  });
};

/**
 * Finds all anjeoLights in the database.
 * @returns {Promise} - A promise that resolves with an array of all anjeoLight
 *  records found or rejects with an error.
 */
export const findAllAnjeoLights = () => {
  return new Promise((resolve, reject) => {
    // Find all anjeoLights in the database
    anjeoLight.findAll()
      .then(anjeoLights => {
        // If anjeoLights are found, resolve the promise with the array of anjeoLight records
        resolve(anjeoLights);
      })
      .catch(err => {
        // If an error occurs while searching for anjeoLights, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar los anjeos livianos en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Finds all anjeoLights in the database for a specific order owner ID.
 * @param {number} orderOwnerID - The ID of the order owner to filter the anjeoLights by.
 * @returns {Promise} - A promise that resolves with an array of all anjeoLight
 *  records found for the specified order owner ID or rejects with an error.
 */
export const findAllAnjeoLightsByOrderOwnerID = (orderOwnerID) => {
  return new Promise((resolve, reject) => {
    // Find all anjeoLights in the database where orderOwnerID matches the specified value
    anjeoLight.findAll({
      where: {
        orderOwnerID: orderOwnerID
      }
    })
    .then(anjeoLights => {
      // If anjeoLights are found, resolve the promise with the array of anjeoLight records
      resolve(anjeoLights);
    })
    .catch(err => {
      // If an error occurs while searching for anjeoLights, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar los anjeos livianos en la base de datos', err
      );
      reject(boomError);
    });
  });
};

/**
 * Creates a new anjeoLight in the database.
 * @param {object} anjeoLightData - An object containing the data for the new anjeoLight.
 * @returns {Promise} - A promise that resolves with the newly created anjeoLight
 *  record or rejects with an error.
 */
export const createAnjeoLight = (anjeoLightData) => {
  return new Promise((resolve, reject) => {
    // Create a new anjeoLight in the database with the provided data
    anjeoLight.create(anjeoLightData)
      .then(newAnjeoLight => {
        // If the anjeoLight is created successfully, resolve the promise with the newly created anjeoLight record
        resolve(newAnjeoLight);
      })
      .catch(err => {
        // If an error occurs while creating the anjeoLight, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible crear el anjeo liviano en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Deletes a anjeoLight from the database by their ID.
 * @param {number} id - The ID of the anjeoLight to delete.
 * @returns {Promise} - A promise that resolves when the anjeoLight is deleted or
 *  rejects with an error.
 */
export const deleteAnjeoLightById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the anjeoLight by their ID
    anjeoLight.findByPk(id)
      .then(anjeoLightRecord => {
        if (!anjeoLightRecord) {
          // If the anjeoLight is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el anjeo liviano en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the anjeoLight is found, delete them from the database
          anjeoLightRecord.destroy()
            .then(() => {
              // Resolve the promise once the anjeoLight is deleted
              resolve();
            })
            .catch(err => {
              // If there's an error deleting the anjeoLight, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible eliminar el anjeo liviano en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the anjeoLight, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el anjeo liviano en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Modifies a anjeoLight's information in the database.
 * @param {number} id - The ID of the anjeoLight to modify.
 * @param {object} newData - An object containing the new data to update for the anjeoLight.
 * @returns {Promise} - A promise that resolves when the anjeoLight's information is successfully modified or rejects with an error.
 */
export const modifyAnjeoLight = (id, newData) => {
  return new Promise((resolve, reject) => {
    // Find the anjeoLight by their ID
    anjeoLight.findByPk(id)
      .then(anjeoLightRecord => {
        if (!anjeoLightRecord) {
          // If the anjeoLight is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el anjeo liviano en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the anjeoLight is found, update their information with the new data
          anjeoLightRecord.update(newData)
            .then(() => {
              // Resolve the promise once the anjeoLight's information is successfully modified
              resolve();
            })
            .catch(err => {
              // If there's an error updating the anjeoLight's information, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible actualizar el anjeo liviano en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the anjeoLight, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el anjeo liviano en la base de datos', err
        );
        reject(boomError);
      });
  });
};
