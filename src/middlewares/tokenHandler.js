import { config } from '../config/config.js';
import { signUserToken } from '../utils/auth/tokenSign.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authenticationToken = req.cookies.authentication
  if (!authenticationToken) {
    res.clearCookie('authentication');
    return res.render('accessDenied');
  }
  jwt.verify(authenticationToken, config.jwtKey, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        res.clearCookie('authentication');
        return res.render('tokenExpired');
      } else {
        res.clearCookie('authentication');
        return res.render('tokenInvalid');
      }
    }

    const userData = {
      id: decoded.id,
      rol: decoded.rol,
      currentOrder: decoded.currentOrder
    };

    const newUserToken = signUserToken(userData, config.jwtKey);
    res.cookie('authentication', newUserToken, { httpOnly: true });
    req.user = decoded;
    next();
  });
};
