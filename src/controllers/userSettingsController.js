import Boom from '@hapi/boom';

export const userSettings = async (req, res, next) => {
  try {
    res.render('userSettings');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de configuración de usuarios',
      err);
    next(boomError);
  }
};
