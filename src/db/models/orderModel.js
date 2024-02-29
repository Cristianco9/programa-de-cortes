import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';
//import { User } from './userModel.js';
//import { AnjeoLight } from './anjeoLightModel.js'
//import { AnjeoHeavy } from './anjeoHeavyModel.js';

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
        field: 'user_owner_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      dateCreation: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date_creation',
        defaultValue: Sequelize.NOW
      },
      status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'Creado'
      },
      anjeosLightID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        field: 'anjeos_light_id',
        references: {
          model: 'anjeos_light',
          key: 'anjeo_light_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      anjeosHeavyID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        field: 'anjeos_heavy_id',
        references: {
          model: 'anjeos_heavy',
          key: 'anjeo_heavy_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    },
    {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  );

import('./userModel.js').then((module) => {
  const User = module.User;
  Order.belongsTo(User, { foreignKey: 'id'});
});

import('./anjeoLightModel.js').then((module) => {
  const AnjeoLight = module.AnjeoLight;
  Order.belongsTo(AnjeoLight, { foreignKey: 'anjeos_light_id'});
});

import('./anjeoHeavyModel.js').then((module) => {
  const AnjeoHeavy = module.AnjeoHeavy;
  Order.belongsTo(AnjeoHeavy, { foreignKey: 'anjeos_heavy_id'});
});

//Order.belongsTo(User, { foreignKey: 'id'});
//Order.hasMany(AnjeoLight, { foreignKey: 'orderOwnerID'});
//Order.hasMany(AnjeoHeavy, { foreignKey: 'orderOwnerID'});
