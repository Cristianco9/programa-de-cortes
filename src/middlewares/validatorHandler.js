import Boom from '@hapi/boom';

export const validatorHandler = (schema, property) => {

  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      const boomError = Boom.badRequest('No es posible crear el pedido en la base de datos', error);
      next(boomError);
    }
    next();
  }
}
