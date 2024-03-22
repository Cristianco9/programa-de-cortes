import jwt from 'jsonwebtoken';

export const signToken = (payload, secret) => {
  return jwt.sign(payload, secret);
};
