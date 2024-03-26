import Boom from '@hapi/boom';

export const typeToDuplicate = async (req, res, next) => {
  try {
    res.render('typeToDuplicate');
  } catch (err) {
    const boomError = Boom.notImplemented(
      `No es posible renderizar la vista de seleccionar el tipo
      de anjeo creado para duplicarlo`,
      err);
    next(boomError);
  }
}
