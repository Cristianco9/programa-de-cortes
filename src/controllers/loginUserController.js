import { User } from '../db/models/userModel.js';
import bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';
import { signToken } from '../utils/auth/tokenSign.js';
import { config } from '../config/config.js'

export const login = async (req, res, next) => {

  const userName = req.body.userName;
  const password = req.body.password;

  try {

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
        const userData = {
          id: userRecord.id,
          rol: userRecord.rol
        };
        const token = signToken(userData, config.jwtKey);
        res.cookie('authentication', token, { httpOnly: true });
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
