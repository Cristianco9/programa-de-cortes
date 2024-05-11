import {
  login
} from "./authResolvers.js";
import {
  user,
  allUsers,
  newUser,
  deleteUser,
  updateUser
} from "./userResolvers.js";
import {
  order,
  allOrders,
  newOrder,
  deleteOrder,
  updateOrder
} from "./orderResolvers.js";
import { RegularExpression } from "graphql-scalars";
import {
  userIdReGex,
  userEmailReGex,
  userRolReGex,
  userNameReGex,
  userPasswordReGex
} from "../../utils/ReGex/userReGex.js";
import {
  orderIdReGex,
  orderStatusReGex
} from "../../utils/ReGex/orderReGex.js";

// The users ReGex scalars
const UserIdType = new RegularExpression('UserIdType', userIdReGex);
const UserEmailType = new RegularExpression('UserEmailType', userEmailReGex);
const UserRolType = new RegularExpression('UserRolType', userRolReGex);
const UserNameType = new RegularExpression('UserNameType', userNameReGex);
const UserPasswordType = new RegularExpression('UserPasswordType', userPasswordReGex);

// The orders ReGex scalars
const OrderIdType = new RegularExpression('orderIdType', orderIdReGex);
const OrderStatusType = new RegularExpression('OrderStatusType', orderStatusReGex);

export const resolvers = {
  Query: {
    // Users
    user,
    allUsers,

    // Orders
    order,
    allOrders
  },
  Mutation: {
    // Auth
    login,

    // Users
    newUser,
    deleteUser,
    updateUser,

    // Orders
    newOrder,
    deleteOrder,
    updateOrder
  },

  // Users scalars
  UserIdType,
  UserEmailType,
  UserRolType,
  UserNameType,
  UserPasswordType,

  // Orders scalars
  OrderIdType,
  OrderStatusType

}
