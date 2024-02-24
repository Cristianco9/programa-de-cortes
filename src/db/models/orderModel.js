/*import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';

export const ORDER_TABLE = 'orders';

export const Order = sequelize.define(ORDER_TABLE, {

  userOwnerID: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  dateCreation: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'date_creation',
    defaultValue: Sequelize.NOW
  },

  status: {
    type: DataTypes.STRING(10),
    allowNull: false
  }

})

User.sync()

export class Order extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
} */

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';

const ORDER_TABLE = 'orders';

const Order = sequelize.define(ORDER_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userOwnerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_owner_id'
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_creation',
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'Creado'
    }
  },
  {
    tableName: ORDER_TABLE,
    modelName: 'Order',
    timestamps: false
  }
);

export default Order;
