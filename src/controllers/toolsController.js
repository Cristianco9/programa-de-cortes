import { Boom } from '@hapi/boom';

export const tools = async (req, res, next) => {
  try {
      res.render('tools');
  } catch (err) {
    const boomError = Boom.notImplemented('No es posible renderizar la vista de seleccionar el tipo de herramienta', err);
    next(boomError);
  }
};
