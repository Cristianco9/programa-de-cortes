import Boom from '@hapi/boom';

export const settings = async (req, res, next) => {
  try {
    res.render('settings');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de configuración',
      err);
    next(boomError);
  }
};
