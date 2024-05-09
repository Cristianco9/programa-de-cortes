import {
  findById,
  findAllOrders,
  createOrder,
  deleteOrderById,
  modifyOrder
} from "../../services/orderServices.js";

export const order = async (_, { dto }) => {
  const orderRecord = await findById(dto.id);
  return orderRecord
}

export const allOrders = async () => {
  const ordersRecord = await findAllOrders({});
  return ordersRecord
}

export const newOrder = async (_, { dto }) => {
  const newRecord = await createOrder(dto);
  return newRecord
}

export const deleteOrder = async (_, { dto }) => {
  const deleteRecord = await deleteOrderById(dto.id);
  return deleteRecord
}

export const updateOrder = async (_, { id, dto }) => {
  const updatedRecord = await modifyOrder(id, dto);
  return updatedRecord
}
