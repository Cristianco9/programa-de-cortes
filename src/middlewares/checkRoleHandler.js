import { verifyToken } from '../utils/auth/tokenVerify.js';
import { config } from '../config/config.js';

export const checkRole = (roles) => {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(403).send('Acceso denegado');
    }

    try {
      const user = verifyToken(token, config.jwtKey);

      if (!user || !user.rol || !roles.includes(user.rol)) {
        return res.status(401).send('No autorizado');
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).send('Token inválido');
    }
  };
};
