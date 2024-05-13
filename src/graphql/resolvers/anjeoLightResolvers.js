import {
  findById,
  findAllAnjeoLight,
  findAllAnjeoLightByOrderOwnerId,
  createAnjeoLight,
  deleteAnjeoLightById,
  modifyAnjeoLight
} from "../../services/anjeoLightServices.js";
import { checkRolesGql } from "../../utils/check/checkRolesGql.js";
import { checkJwtGql } from "../../utils/check/checkJwtGql.js";
import Boom from '@hapi/boom';

export const anjeoLight = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const anjeoLightRecord = await findById(dto.anjeoLightID);
    return anjeoLightRecord
  } catch (err) {
    throw err;
  }
};

export const allAnjeosLight = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const allAnjeosLightRecord = await findAllAnjeoLight({});
    return allAnjeosLightRecord
  } catch (err) {
    throw err;
  }
};

export const allAnjeosLightByOwnerId = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const allAnjeosLightRecord = await findAllAnjeoLightByOrderOwnerId(dto.orderOwnerID);
    return allAnjeosLightRecord
  } catch (err) {
    throw err;
  }
};

export const newAnjeoLight = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const newAnjeoLightRecord = await createAnjeoLight(dto);
    return newAnjeoLightRecord;
  } catch (err) {
    throw err;
  }
};

export const deleteAnjeoLight = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const deletedAnjeoLightRecord = await deleteAnjeoLightById(dto.anjeoLightID);
    return  deletedAnjeoLightRecord
  } catch (err) {
    throw err;
  }
};

export const updateAnjeoLight = async (_, { id, dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const updatedRecord = await modifyAnjeoLight(id, dto);
    return updatedRecord
  } catch (err) {
    throw err;
  }
};
