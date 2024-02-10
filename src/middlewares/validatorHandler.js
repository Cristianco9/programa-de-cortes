import Boom from '@hapi/boom';

export const validatorHandler = (schema, property) => {

  return (req, res, next) => {

    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      const boomError = Boom.badRequest(error);
      next(boomError);
    }
    next();
  }
}
