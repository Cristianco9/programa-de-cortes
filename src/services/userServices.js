import { User } from '../db/models/userModel.js';
import Boom from '@hapi/boom';

export const findByName = (userName) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      where: {
        name: userName
      }
    })
    .then(userRecord => {
      resolve(userRecord);
    })
    .catch(err => {
      const boomError = Boom.serverUnavailable(
        'No es posible encontrar el usuario en la base de datos', err);
      reject(boomError);
    });
  });
};
