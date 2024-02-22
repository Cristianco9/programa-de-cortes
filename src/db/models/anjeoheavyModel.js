import { Model, DataTypes, Sequelize } from 'sequelize';

export const ANJEO_HEAVY_TABLE = 'anjeos_heavy';

export const anjeoHeavySchema = {

  orderOwnerID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  anjeoHeavyID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true,
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
    allowNull: false
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
    allowNull: false
  },

  installation: {
    type: DataTypes.STRING(7),
    allowNull: false
  },

  divisorHigh: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  typeHandle: {
    type: DataTypes.STRING(12),
    allowNull: false
  },

  openDirection: {
    type: DataTypes.STRING(9),
    allowNull: false
  },

  notes: {
    type: DataTypes.STRING(200)
  }
}

export class anjeoHeavy extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelname: 'Anjeo_heavy',
      timestamps: false
    }
  }
}
