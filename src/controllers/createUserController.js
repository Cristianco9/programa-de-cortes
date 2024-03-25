import { User } from '../db/models/userModel.js';
import { hashPassword } from '../utils/auth/passHash.js';
import Boom from '@hapi/boom';

export const createUser = async (req, res, next) => {

  const newUser = {
    rol: req.body.rol,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  };

  try {

    const existingUserByName = await User.findOne({
      where: { name: newUser.name }
    });

    const existingUserByEmail = await User.findOne({
      where: { email: newUser.email }
    });

    if (existingUserByName) {
      return res.render('nameDuplicated');
    }

    if (existingUserByEmail) {
      return res.render('emailDuplicated');
    }

    const hash = await hashPassword(newUser.password);

    const insertUser = await User.create({
      dateCreation: new Date(),
      rol: newUser.rol,
      email: newUser.email,
      name: newUser.name,
      password: hash
    });

    return res.render('userCreatedSuccessfully');
  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible crear el nuevo usuario en la base de datos', err);
    next(boomError);
  }
};
