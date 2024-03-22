
import Boom from '@hapi/boom';

export const userLogin = async (req, res, next) => {
  try {
    res.render('login');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista principal de inicio de sección',
      err.message);
    next(boomError);
  }
};
