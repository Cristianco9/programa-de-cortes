import {
  order,
  allOrders,
  newOrder,
  deleteOrder,
  updateOrder
} from "./orderResolvers.js";
import {
  login
} from "./authResolvers.js"

export const resolvers = {
  Query: {
    // Orders
    order,
    allOrders
  },
  Mutation: {
    // Auth
    login,

    // Orders
    newOrder,
    deleteOrder,
    updateOrder
  }
}
