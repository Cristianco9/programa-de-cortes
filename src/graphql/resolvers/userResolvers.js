import {
  findById,
  findAllUsers,
  createUser,
  deleteUserById,
  modifyUser
} from "../../services/userServices.js";
import { checkRolesGql } from "../../utils/check/checkRolesGql.js";
import { checkJwtGql } from "../../utils/check/checkJwtGql.js";
import Boom from '@hapi/boom';

export const user = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador');
    const userRecord = await findById(dto.id);
    return userRecord
  } catch (err) {
    throw err;
  }
}

export const allUsers = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador');
    const usersRecord = await findAllUsers({});
    return usersRecord
  } catch (err) {
    throw err;
  }
}

export const newUser = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador');
    const newRecord = await createUser(dto);
    return newRecord;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador');
    console.log("the order id to delete:", dto.id);
    const deleteRecord = await deleteUserById(dto.id);
    return deleteRecord
  } catch (err) {
    throw err;
  }
}

export const updateUser = async (_, { id, dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador');
    const updatedRecord = await modifyUser(id, dto);
    return updatedRecord
  } catch (err) {
    throw err;
  }
}
