import Boom from '@hapi/boom';

export const userRedirect = async (req, res, next) => {
  const path = req.query.path;
  try {

    if (!path) {
      const boomError = Boom.badRequest('La ruta no está especificada');
      next(boomError);
    } else {
      res.render(path);
    }

  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista ingresada por el cliente', err.message);
    next(boomError);
  }
};
