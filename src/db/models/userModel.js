import { Model, DataTypes, Sequelize } from 'sequelize';

export const USER_TABLE = 'users';

export const UserSchema = {

  dateCreation: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'date_creation',
    defaultValue: Sequelize.NOW
  },

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
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

}

export class User extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelname: 'User',
      timestamps: false
    }
  }
}
