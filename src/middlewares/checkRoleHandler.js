import { verifyToken } from '../utils/auth/tokenVerify.js';
import { config } from '../config/config.js';

export const checkRole = (roles) => {
  return (req, res, next) => {
    const authenticationToken = req.cookies.authentication;

    if (!authenticationToken) {
      return res.render('accessDenied');
    }

    try {
      const user = verifyToken(authenticationToken, config.jwtKey);

      if (!user || !user.rol || !roles.includes(user.rol)) {
        return res.render('unauthorized');
      }

      req.user = user;
      next();
    } catch (error) {
      return res.render('tokenInvalid');
    }
  };
};
