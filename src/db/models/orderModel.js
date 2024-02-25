import { DataTypes } from 'sequelize';
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
    sequelize,
    tableName: ORDER_TABLE,
    modelName: 'Order',
    timestamps: false
  }
);

export default Order;
