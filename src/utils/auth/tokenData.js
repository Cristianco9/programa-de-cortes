import { verifyToken } from './tokenVerify.js';
import { config } from '../../config/config.js';

export const getUserIdFromCookie = (req) => {
  const token = req.cookies.token;

  if (!token) {
    return null;
  }
  try {
    const decoded = verifyToken(token, config.jwtKey);
    return decoded.id;
  } catch (err) {
    return null;
  }
};
