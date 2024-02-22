import { Model, DataTypes, Sequelize } from 'sequelize';

export const ORDER_TABLE = 'orders';

export const OrderSchema = {

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

}

export class Order extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelname: 'Order',
      timestamps: false
    }
  }
}
