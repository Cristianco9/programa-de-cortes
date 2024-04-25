export const logout = (req, res, next) => {
  try {
    res.clearCookie('authentication');
    res.render('login');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista principal de inicio de sección',
      err.message);
    next(boomError);
  }
}
