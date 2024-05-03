import {
  findById,
  findAllOrders,
  createOrder,
  deleteOrderById,
  modifyOrder
} from "../../services/orderServices.js";

export const order = async (_, { id }) => {
  const orderRecord = await findById(id);
  return orderRecord
}

export const allOrders = async () => {
  const ordersRecord = await findAllOrders({});
  return ordersRecord
}

export const newOrder = async (_, args) => {
  const newRecord = await createOrder(args);
  return newRecord
}

export const deleteOrder = async (_, { id }) => {
  const deleteRecord = await deleteOrderById(id);
  return deleteRecord
}

export const updateOrder = async (_, args) => {
  const updatedRecord = await modifyOrder(args);
  return updatedRecord
}
