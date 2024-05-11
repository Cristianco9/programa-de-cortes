import { User } from '../db/models/userModel.js';
import { hashPassword } from '../utils/auth/passHash.js';
import bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';
import { signUserToken } from '../utils/auth/tokenSign.js';
import { config } from '../config/config.js'

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
      if (userRecord.dataValues.hasOwnProperty('password')) {
        delete userRecord.dataValues.password;
      }
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
      if (userRecord.dataValues.hasOwnProperty('password')) {
        delete userRecord.dataValues.password;
      }
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
    User.findAll({
      order: [['id', 'ASC']]
    })
      .then(users => {
        const usersClean = users.map(users => {
          if (users.dataValues.hasOwnProperty('password')) {
            delete users.dataValues.password;
            return users;
          } else {
            return users;
          }
        });
        // If users are found, resolve the promise with the array of user records
        resolve(usersClean);
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
  return new Promise( async (resolve, reject) => {
    // Hash the new user password
    const hash = await hashPassword(userData.password);
    console.log("the password hashed:");
    console.log(hash);
    userData.password = hash;
    // Create a new user in the database with the provided data
    User.create(userData)
      .then(newUser => {
        if (newUser.dataValues.hasOwnProperty('password')) {
          delete newUser.dataValues.password;
        }
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
              if (userRecord.dataValues.hasOwnProperty('password')) {
                delete userRecord.dataValues.password;
              }
              // Resolve the promise once the user is deleted
              resolve(userRecord);
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
      .then( async userRecord => {
        if (!userRecord) {
          // If the user is not found, reject the promise with an error
          const error = new Error(
            'No es posible encontrar el usuario en la base de datos'
          );
          error.statusCode = 404;
          reject(error);
        } else {
          if (newData.hasOwnProperty('password')) {
            // Hash the new user password
            const hash = await hashPassword(newData.password);
            newData.password = hash
          }
          // If the user is found, update their information with the new data
          userRecord.update(newData)
            .then(() => {
              // remove the field password before to return the user
              console.log("the row data");
              console.log(userRecord);
              if (userRecord.dataValues.hasOwnProperty('password')) {
                delete userRecord.dataValues.password;
              }
              // Resolve the promise once the user's information is successfully modified
              resolve(userRecord);
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

/**
 * Authenticate user and generate JWT token.
 * @param {string} userName - The username of the user attempting to log in.
 * @param {string} password - The password of the user attempting to log in.
 * @returns {Promise<string>} A promise that resolves with the JWT token upon successful authentication.
 * @throws {Error} If the user is not found in the database or if the password is incorrect.
 */
export const userLogin = (userName, password) => {
  return new Promise((resolve, reject) => {
    // Find the user by their username in the database
    User.findOne({
      where: {
        name: userName
      }
    })
      .then(userRecord => {
        // If the user is not found, reject the promise with an error
        if (!userRecord) {
          const error = new Error('User not found in the database');
          error.statusCode = 404;
          reject(error);
          return;
        }
          // Compare the provided password with the stored password hash
          bcrypt.compare(password, userRecord.password)
            .then(validPassword => {
              // If the password is not valid, reject the promise with an error
              if (!validPassword) {
                const error = new Error('Incorrect password');
                error.statusCode = 401;
                reject(error);
                return
              }

              // Generate JWT token with user data
              const userData = {
                id: userRecord.id,
                rol: userRecord.rol
              };
              const userToken = signUserToken(userData, config.jwtKey);

              // Resolves the promise with the JWT token
              resolve(userToken);

            })
            .catch(err => {
              // If there's an error comparing passwords, reject the promise with a detailed error
              reject(err);
            });
      })
      .catch(err => {
        // If there's an error finding the user, reject the promise with a detailed error
        reject(err);
      });
  });
};
