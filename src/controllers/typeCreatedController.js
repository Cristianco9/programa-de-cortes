import Boom from '@hapi/boom';

export const typeCreated = async (req, res, next) => {
  try {
    res.render('typeCreated');
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible renderizar la vista de seleccionar el tipo de anjeo creado', err);
    next(boomError);
  }
}
