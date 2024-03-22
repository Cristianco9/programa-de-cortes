import { config } from '../config/config.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).send('Acceso denegado');
  }
  jwt.verify(token, config.jwtKey, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.render('login');
      } else {
        return res.status(401).send('Token inválido');
      }
    }
    req.user = decoded;
    next();
  });
};
