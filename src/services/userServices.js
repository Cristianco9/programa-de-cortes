import { User } from '../db/models/userModel.js';
import Boom from '@hapi/boom';

/**
 * Finds a user by their name in the database.
 * @param {string} name - The name of the user to search for.
 * @returns {Promise} - A promise that resolves with the user record found or
 *  rejects with an error.
 */
export const findByName = (name) => {
  return new Promise((resolve, reject) => {
    // Find the user in the database
    User.findOne({
      where: {
        name: name
      }
    })
    .then(userRecord => {
      // If the user is found, resolve the promise with the user record
      resolve(userRecord);
    })
    .catch(err => {
      // If an error occurs while searching for the user, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'Unable to find the user in the database', err
      );
      reject(boomError);
    });
  });
};

/**
 * Finds a user by their ID in the database.
 * @param {number} id - The ID of the user to search for.
 * @returns {Promise} - A promise that resolves with the user record found or
 *  rejects with an error.
 */
export const findById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the user in the database
    User.findOne({
      where: {
        id: id
      }
    })
    .then(userRecord => {
      // If the user is found, resolve the promise with the user record
      resolve(userRecord);
    })
    .catch(err => {
      // If an error occurs while searching for the user, reject the promise with a detailed error
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar el usuario en la base de datos', err
      );
      reject(boomError);
    });
  });
};

/**
 * Finds all users in the database.
 * @returns {Promise} - A promise that resolves with an array of all user records
 *  found or rejects with an error.
 */
export const findAllUsers = () => {
  return new Promise((resolve, reject) => {
    // Find all users in the database
    User.findAll()
      .then(users => {
        // If users are found, resolve the promise with the array of user records
        resolve(users);
      })
      .catch(err => {
        // If an error occurs while searching for users, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar los usuarios en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Creates a new user in the database.
 * @param {object} userData - An object containing the data for the new user.
 * @returns {Promise} - A promise that resolves with the newly created user
 *  record or rejects with an error.
 */
export const createUser = (userData) => {
  return new Promise((resolve, reject) => {
    // Create a new user in the database with the provided data
    User.create(userData)
      .then(newUser => {
        // If the user is created successfully, resolve the promise with the newly created user record
        resolve(newUser);
      })
      .catch(err => {
        // If an error occurs while creating the user, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible crear el usuario en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Deletes a user from the database by their ID.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise} - A promise that resolves when the user is deleted or
 *  rejects with an error.
 */
export const deleteUserById = (id) => {
  return new Promise((resolve, reject) => {
    // Find the user by their ID
    User.findByPk(id)
      .then(userRecord => {
        if (!userRecord) {
          // If the user is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el usuario en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the user is found, delete them from the database
          userRecord.destroy()
            .then(() => {
              // Resolve the promise once the user is deleted
              resolve();
            })
            .catch(err => {
              // If there's an error deleting the user, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible eliminar el usuario en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the user, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el usuario en la base de datos', err
        );
        reject(boomError);
      });
  });
};

/**
 * Modifies a user's information in the database.
 * @param {number} id - The ID of the user to modify.
 * @param {object} newData - An object containing the new data to update for the user.
 * @returns {Promise} - A promise that resolves when the user's information is successfully modified or rejects with an error.
 */
export const modifyUser = (id, newData) => {
  return new Promise((resolve, reject) => {
    // Find the user by their ID
    User.findByPk(id)
      .then(userRecord => {
        if (!userRecord) {
          // If the user is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el usuario en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          // If the user is found, update their information with the new data
          userRecord.update(newData)
            .then(() => {
              // Resolve the promise once the user's information is successfully modified
              resolve();
            })
            .catch(err => {
              // If there's an error updating the user's information, reject the promise with a detailed error
              const boomError = Boom.serverUnavailable(
                'No es posible actualizar el usuario en la base de datos', err
              );
              reject(boomError);
            });
        }
      })
      .catch(err => {
        // If there's an error finding the user, reject the promise with a detailed error
        const boomError = Boom.serverUnavailable(
          'No es posible encontrar el usuario en la base de datos', err
        );
        reject(boomError);
      });
  });
};
