import { config } from '../config/config.js';
import { signToken } from '../utils/auth/tokenSign.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.render('accessDenied');
  }
  jwt.verify(token, config.jwtKey, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.render('tokenExpired');
      } else {
        return res.render('tokenInvalid');
      }
    }
    const userData = {
      id: decoded.id,
      rol: decoded.rol
    };
    const newToken = signToken(userData, config.jwtKey);
    res.cookie('token', newToken, { httpOnly: true });
    req.user = decoded;
    next();
  });
};
