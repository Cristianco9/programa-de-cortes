import { DataTypes } from 'sequelize';
import { sequelize } from '../../libraries/DBConnection.js';

const ANJEO_LIGHT_TABLE = 'anjeos_light';

const AnjeoLight = sequelize.define(ANJEO_LIGHT_TABLE,
  {
    orderOwnerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_owner_id'
    },
    anjeoLightID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'anjeo_light_id'
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_creation',
      defaultValue: DataTypes.NOW
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

export default AnjeoLight;