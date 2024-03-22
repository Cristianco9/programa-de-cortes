import jwt from ' jsonwebtoken';

const secret = 'Demian';

export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

const payload = verifyToken(token, secret);
