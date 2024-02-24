import Boom from '@hapi/boom';

export const type = async (req, res, next) => {
  try {
    res.render('type');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de seleccionar el tipo de anjeo a crear',
      err.message);
    next(boomError);
  }
};
