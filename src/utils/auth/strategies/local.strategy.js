import { findByName } from '../../../services/userServices.js'
import { Strategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';

export const LocalStrategy = new Strategy({
    usernameField: 'userName',
    passwordField: 'password'
  },
  async  (username, password, done) => {
    try {
      const user = await findByName(username);
      if (!user) {
        done(Boom.unauthorized(), false);
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if(!validPassword) {
        done(Boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      done(null, user)
    } catch (err) {
      done(err, false);
    }
  }
);
