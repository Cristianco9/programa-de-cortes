import { verifyToken } from '../utils/auth/tokenVerify.js';
import { config } from '../config/config.js';

export const checkRole = (roles) => {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      return res.render('accessDenied');
    }

    try {
      const user = verifyToken(token, config.jwtKey);

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
