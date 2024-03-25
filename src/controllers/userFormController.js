import Boom from '@hapi/boom';

export const newUser = async (req, res, next) => {
  try {
    res.render('userForm');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista del formulario de crear un usuario',
      err);
    next(boomError);
  }
};
