/*import { sequelize } from '../../libraries/DBConnection.js';
import User from './userModel.js';
import Order from './orderModel.js';
import AnjeoLight from './anjeoLightModel.js';
import AnjeoHeavy from './anjeoHeavyModel.js';

export const setupModels = async () => {
  try {
    await User.sync();
    await Order.sync();
    await AnjeoLight.sync();
    await AnjeoHeavy.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("An error occurred while synchronizing models:", error);
  }
}*/

import User from './userModel.js';
import Order from './orderModel.js';
import AnjeoLight from './anjeoLightModel.js';
import AnjeoHeavy from './anjeoHeavyModel.js';

export { User, Order, AnjeoLight, AnjeoHeavy };
