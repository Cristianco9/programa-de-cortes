import { sequelize } from '../../libraries/DBConnection.js';
import { DataTypes, Sequelize } from 'sequelize';
//import { ORDER_TABLE, Order } from './orderModel.js';

export const USER_TABLE = 'users';

export const User = sequelize.define(USER_TABLE,
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      dateCreation: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date_creation',
        defaultValue: Sequelize.NOW
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
      },
      rol: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(70),
        allowNull: false
      },
      orders: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    },
    {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  );

import('./orderModel.js').then((module) => {
    const Order = module.Order;
    User.hasMany(Order, { foreignKey: 'user_owner_id', as: 'order'});
  });

//User.hasMany(Order, { foreignKey: 'userOwnerID'});
