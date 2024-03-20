import { User } from '../db/models/userModel.js';
import { hashPassword } from '../utils/auth/passHash.js'
import Boom from '@hapi/boom';

export const createUser = async (req, res, next) => {

  const newUser = {
    rol: req.body.rol,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  }

  try {
    const hash = await hashPassword(newUser.password);

    try {
      const insertUser = await User.create({
        dateCreation: new Date(),
        rol: newUser.rol,
        email: newUser.email,
        name: newUser.name,
        password: hash
      });

      res.status(300).json(insertUser);
    } catch (err) {
      const boomError = Boom.serverUnavailable(
        'No es posible crear el nuevo usuario en la base de datos', err);
      next(boomError);
    }

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible encriptar la contraseña del usuario',
      err);
    next(boomError);
  }
};
