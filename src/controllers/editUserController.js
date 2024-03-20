import { User } from '../db/models/userModel.js';
import Boom from '@hapi/boom';

export const editUser = async (req, res, next) => {

  const { id } = req.params;

  try {
    const userToEdit = await User.findOne({
      where: {
        id: id
      }
    });

    if (!userToEdit) {
      const boomError = Boom.notFound(
        'No es posible encontrar el usuario en la base de datos');
      next(boomError);
    }

    res.status(200).json(userToEdit);

  } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible renderizar el formulario de edición de un usuario', err);
      next(boomError);
  }
}
