const { DataTypes } = require('sequelize');

'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
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
        unique: true
      }
    });

    await queryInterface.createTable('orders', {
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
        field: 'anjeos_light_id'
      },
      anjeosHeavyID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        field: 'anjeos_heavy_id'
      }
    });

    await queryInterface.createTable('anjeos_light', {
      orderOwnerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_owner_id',
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
      widthOptional: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'width_optional'
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
      divisorQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'divisor_quantity'
      },
      divisorOrientation: {
        type: DataTypes.STRING(10),
        allowNull: true,
        field: 'divisor_orientation'
      },
      angle: {
        type: DataTypes.STRING(18),
        allowNull: false
      },
      notes: {
        type: DataTypes.STRING(200)
      }
    });

    await queryInterface.createTable('anjeos_heavy', {
      orderOwnerID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'order_owner_id'
      },
      anjeoHeavyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        field: 'anjeo_heavy_id'
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
        type: DataTypes.STRING(12),
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
      rielLower: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'riel_lower'
      },
      rielUpper: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'riel_upper'
      },
      angleTubular: {
        type: DataTypes.STRING(9),
        allowNull: false,
        field: 'angle_tubular'
      },
      angleMeasure: {
        type: DataTypes.STRING(11),
        allowNull: false,
        field: 'angle_measure'
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('anjeos_light');
    await queryInterface.dropTable('anjeos_heavy');
  }

};
