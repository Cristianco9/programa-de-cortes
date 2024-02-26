const { DataTypes } = require('sequelize');

'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      dateCreation: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'date_creation',
        defaultValue: Sequelize.NOW
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      rol: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
    });

    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userOwnerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_owner_id'
      },
      dateCreation: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'date_creation',
        defaultValue: Sequelize.NOW
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'Creado'
      },
    });

    await queryInterface.createTable('anjeos_light', {
      orderOwnerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'order_owner_id'
      },
      anjeoLightID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'anjeo_light_id'
      },
      dateCreation: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'date_creation',
        defaultValue: Sequelize.NOW
      },
      color: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      profileType: {
        type: Sequelize.STRING(8),
        allowNull: false,
        field: 'profile_type'
      },
      opening: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      place: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      width: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      guide: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      installation: {
        type: Sequelize.STRING(7),
        allowNull: false
      },
      divisorHigh: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'divisor_high'
      },
      angle: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING(200)
      },
    });

    await queryInterface.createTable('anjeos_heavy', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('anjeos_light');
    await queryInterface.dropTable('anjeos_heavy');
  }

};
