import { order, allOrders } from "./orderResolvers.js";

export const resolvers = {
  Query: {
    // Orders
    order,
    allOrders
  }
}
