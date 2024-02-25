import { ValidationError } from 'sequelize';
import Boom from '@hapi/boom';

export const logError = (err, req, res, next) => {
  next(err);
}

export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

export const boomErrorHandler = (err, req, res, next) => {
  if (Boom.isBoom(err)) {
    res.status(err.output.statusCode).json(err.output.payload);
  } else {
    next(err);
  }
}

export const ORMErrorHandler = (err, req, res, next) => {
  if(err instanceof ValidationError) {
    res.status(409).json(
      {
        statusCode: 409,
        message: err.name,
        errors:err.errors
      });
  }
  next(err);
}
