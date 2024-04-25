import jwt from 'jsonwebtoken';

export const signUserToken = (payload, secret) => {
  return jwt.sign(payload, secret, {expiresIn: '15m'});
};
