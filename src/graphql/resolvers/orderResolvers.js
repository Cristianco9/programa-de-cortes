import {
  findById,
  findAllOrders,
  createOrder,
  deleteOrderById,
  modifyOrder
} from "../../services/orderServices.js";
import { checkRolesGql } from "../../utils/check/checkRolesGql.js";
import { checkJwtGql } from "../../utils/check/checkJwtGql.js";
import Boom from '@hapi/boom';

export const order = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const orderRecord = await findById(dto.id);
    return orderRecord
  } catch (err) {
    throw err;
  }
}

export const allOrders = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const ordersRecord = await findAllOrders({});
    return ordersRecord
  } catch (err) {
    throw err;
  }
}

export const newOrder = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const newRecord = await createOrder(dto);
    return newRecord;
  } catch (err) {
    throw err;
  }
};

export const deleteOrder = async (_, { dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const deleteRecord = await deleteOrderById(dto.id);
    return deleteRecord
  } catch (err) {
    throw err;
  }
}

export const updateOrder = async (_, { id, dto }, context) => {
  try {
    const user = await checkJwtGql(context);
    if (!user) {
      const boomError = Boom.unauthorized('El token no es valido');
      throw boomError;
    }
    checkRolesGql(user, 'administrador', 'asesor');
    const updatedRecord = await modifyOrder(id, dto);
    return updatedRecord
  } catch (err) {
    throw err;
  }
}
