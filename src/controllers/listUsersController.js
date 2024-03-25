import { User } from '../db/models/userModel.js';
import Boom from '@hapi/boom';

export const listUsers = async (req, res, next) => {

  try {
    const usersCreated = await User.findAll({
      attributes: ['id','rol', 'name'],
      order: [['id', 'ASC']]
    })

    const usersQuantity = usersCreated.length;
    return res.render(
      'listUsers',
      { usersCreated: usersCreated, usersQuantity: usersQuantity}
    );
  } catch (err) {
    const boomError = Boom.notImplemented(
      'No es posible renderizar la vista de usuarios creados', err);
    next(boomError);
  }
}
