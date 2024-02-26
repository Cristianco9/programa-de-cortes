import { sequelize } from '../../libraries/DBConnection.js';
import { DataTypes } from 'sequelize';

export const USER_TABLE = 'users';

export const User = sequelize.define(USER_TABLE,
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_creation',
      defaultValue: DataTypes.DATE
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
    }
  },
  {
    sequelize,
    tableName: USER_TABLE,
    modelName: 'User',
    timestamps: false
  }
);
