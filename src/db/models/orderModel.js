import { DataTypes } from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';

export const ORDER_TABLE = 'orders';

export const Order = sequelize.define(ORDER_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
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
      defaultValue: DataTypes.DATE
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
