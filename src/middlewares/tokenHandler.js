import { config } from '../config/config.js';
import { signToken } from '../utils/auth/tokenSign.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authenticationToken = req.cookies.authentication
  const currentOrderToken = req.cookies.currentOrder;
  if (!authenticationToken) {
    res.clearCookie('authentication');
    res.clearCookie('currentOrder');
    return res.render('accessDenied');
  }
  jwt.verify(authenticationToken, config.jwtKey, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        res.clearCookie('authentication');
        res.clearCookie('currentOrder');
        return res.render('tokenExpired');
      } else {
        res.clearCookie('authentication');
        res.clearCookie('currentOrder');
        return res.render('tokenInvalid');
      }
    }
    const userData = {
      id: decoded.id,
      rol: decoded.rol,
    };
    const newToken = signToken(userData, config.jwtKey);
    res.cookie('authentication', newToken, { httpOnly: true });
    req.user = decoded;
    next();
  });
};
