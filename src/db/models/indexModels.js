import { User, UserSchema } from './userModel.js';
import { Order, OrderSchema } from './orderModel.js';
import { anjeoLight, anjeoLightSchema } from './anjeoLightModel.js';
import { anjeoHeavy, anjeoHeavySchema } from './anjeoheavyModel.js';

export const setupModels = (Sequelize) => {
  User.init(UserSchema, User.config(Sequelize));
  Order.init(OrderSchema, User.config(Sequelize));
  anjeoLight.init(anjeoLightSchema, User.config(Sequelize));
  anjeoHeavy.init(anjeoHeavySchema, User.config(Sequelize));
}
