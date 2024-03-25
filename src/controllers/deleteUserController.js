import { User } from '../db/models/userModel.js';
import Boom from '@hapi/boom';

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteRecord = await User.destroy({
      where: {
        id: id
      }
    });

    try {
      const result = await User.findAll({
        attributes: ['id', 'rol', 'name' ],
        order: [['id', 'ASC']]
      });

      const usersCreated = result;
      const usersQuantity = usersCreated.length;

      return res.render('listUsers',
        {
          usersQuantity: usersQuantity,
          usersCreated: usersCreated
        });
    } catch (err) {
        const boomError = Boom.serverUnavailable(
          'No es posible listar los usuarios creados',
          err);
        next(boomError);
    };

  } catch (err) {
    const boomError = Boom.serverUnavailable(
      'No es posible eliminar el usuario de la base de datos',
      err);
    next(boomError);
  };
}
