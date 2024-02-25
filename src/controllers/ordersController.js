import Boom from '@hapi/boom';

export const order = async (req, res, next) => {
  try {
    res.render('order');
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de creaación de un nuevo pedido de anjeos',
      err);
    next(boomError);
  }
};
