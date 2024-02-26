import { DataTypes } from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';

export const ANJEO_HEAVY_TABLE = 'anjeos_heavy';

export const AnjeoHeavy = sequelize.define(ANJEO_HEAVY_TABLE,
  {
    orderOwnerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_owner_id'
    },
    anjeoHeavyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'anjeo_heavy_id'
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_creation',
      defaultValue: DataTypes.DATE
    },
    color: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    profileType: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'profile_type',
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
    head: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    adaptador: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    topProfile: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'top_profile'
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
    typeHandle: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'type_handle'
    },
    openDirection: {
      type: DataTypes.STRING(9),
      allowNull: false,
      field: 'open_direction'
    },
    notes: {
      type: DataTypes.STRING(200)
    }
  },
  {
    sequelize,
    tableName: ANJEO_HEAVY_TABLE,
    modelName: 'AnjeoHeavy',
    timestamps: false
  }
);
