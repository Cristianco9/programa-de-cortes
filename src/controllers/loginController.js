import { pool } from '../DBConnection.js';
import bcrypt from 'bcryptjs';
import { Boom } from '@hapi/boom';

export const userLogin = async (req, res, next) => {
  try {
    res.render('login');
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible renderizar la vista principal de inicio de sección', err);
    next(boomError);
  }
};

export const login = async (req, res, next) => {

    const userName = req.body.userName;
    const password = req.body.password;

    try {
        // const hashedPassword = await hashPassword(password);

        const [rows] = await pool.query("SELECT * FROM users WHERE user_name = ?", [userName]);

        if (rows.length === 0) {
            return res.render('loginWrongUser');
        }

        const userExist = rows[0];

        const validPassword = await bcrypt.compare(password, userExist.user_password);

        if (validPassword) {
            return res.render('tools');
        } else {
            return res.render('loginWrongPass');
        }

    } catch (err) {
      const boomError = Boom.serverUnavailable('No es posible verificar las credenciales del usuario en la base de daatos', err);
      next(boomError);
    }
};
