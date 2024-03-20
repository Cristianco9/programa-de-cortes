import { User } from '../db/models/userModel.js';
import { hashPassword } from '../utils/auth/passHash.js';
import Boom from '@hapi/boom';

export const updateUser = async (req, res, next) => {

  const userIdToUpdate = req.params.id;

  const newUser = {
    rol: req.body.rol,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  }

  try {
    const hash = await hashPassword(newUser.password);

    try {
      const updateUser = await User.update({
        dateCreation: new Date(),
        rol: newUser.rol,
        email: newUser.email,
        name: newUser.name,
        password: hash
      }, {
        where: {
          id: userIdToUpdate
        }
      });

      res.status(200).json({
        newUser: newUser,
        'newPassword': hash
      });
    } catch (err) {
        const boomError = Boom.serverUnavailable(
          'No es posible actualizar el usuario', err);
        next(boomError);
    };

  } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible encriptar la contraseña del usuario', err);
      next(boomError);
  }
}
