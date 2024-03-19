import Boom from '@hapi/boom';
import { config } from '../config/config.js';

export const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    const boomError = Boom.unauthorized();
    next(boomError);
  }
}
