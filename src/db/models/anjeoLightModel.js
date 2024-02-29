import { DataTypes, Sequelize} from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';
//import { Order } from './orderModel.js';

export const ANJEO_LIGHT_TABLE = 'anjeos_light';

export const AnjeoLight = sequelize.define(ANJEO_LIGHT_TABLE,
  {
    orderOwnerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'order_owner_id',
      references: {
        model: 'orders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    anjeoLightID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      field: 'anjeo_light_id'
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_creation',
      defaultValue: Sequelize.NOW
    },
    color: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    profileType: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'profile_type'
    },
    opening: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    guide: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    installation: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    divisorHigh: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'divisor_high'
    },
    angle: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(200)
    }
  },
  {
    sequelize,
    tableName: ANJEO_LIGHT_TABLE,
    modelName: 'AnjeoLight',
    timestamps: false
  }
);

//AnjeoLight.belongsTo(Order, { foreignKey: 'orderOwnerID'});

import('./orderModel.js').then((module) => {
  const Order = module.Order;
  AnjeoLight.belongsTo(Order, { foreignKey: 'order_owner_id'});
});
