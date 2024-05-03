import {
  order,
  allOrders,
  newOrder,
  deleteOrder,
  updateOrder
} from "./orderResolvers.js";

export const resolvers = {
  Query: {
    // Orders
    order,
    allOrders,
    newOrder,
    deleteOrder,
    updateOrder
  }
}
