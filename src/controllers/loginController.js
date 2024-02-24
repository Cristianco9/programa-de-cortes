import User from '../db/models/userModel.js';
import bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';

export const userLogin = async (req, res, next) => {
  try {
    res.render('login');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista principal de inicio de sección',
      err.message);
    next(boomError);
  }
};

export const login = async (req, res, next) => {

    const userName = req.body.userName;
    const password = req.body.password;

    try {
        // const hashedPassword = await hashPassword(password);

        const userRecord = await User.findOne({
          where: {
            name: userName
          }
        })

        if (!userRecord) {
          return res.render('loginWrongUser');
        }

        const validPassword = await bcrypt.compare(password, userRecord.password);

        if (validPassword) {
            return res.render('tools');
        } else {
            return res.render('loginWrongPass');
        }

    } catch (error) {
      const boomError = Boom.serverUnavailable(
        'No es posible verificar las credenciales del usuario en la base de datos',
        error);
      next(boomError);
    }
};
