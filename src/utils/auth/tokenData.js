import { verifyToken } from './tokenVerify.js';
import { config } from '../../config/config.js';

export const getUserIdFromCookie = (req) => {
  const authenticationToken = req.cookies.authentication;

  if (!authenticationToken) {
    return null;
  }
  try {
    const decoded = verifyToken(authenticationToken, config.jwtKey);
    return decoded.id;
  } catch (err) {
    return null;
  }
};

export const getUserRolFromCookie = (req) => {
  const authenticationToken = req.cookies.authentication;

  if (!authenticationToken) {
    return null;
  }
  try {
    const decoded = verifyToken(authenticationToken, config.jwtKey);
    return decoded.rol;
  } catch (err) {
    return null;
  }
};
