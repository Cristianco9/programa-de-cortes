'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint('users', {
      fields: ['orders'],
      type: 'foreign key',
      name: 'fk_orders',
      references: {
        table: 'orders',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('orders', {
      fields: ['user_owner_id'],
      type: 'foreign key',
      name: 'fk_user_owner',
      references: {
        table: 'users',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('orders', {
      fields: ['anjeos_light_id'],
      type: 'foreign key',
      name: 'fk_anjeos_light',
      references: {
        table: 'anjeos_light',
        field: 'anjeo_light_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('orders', {
      fields: ['anjeos_heavy_id'],
      type: 'foreign key',
      name: 'fk_anjeos_heavy',
      references: {
        table: 'anjeos_heavy',
        field: 'anjeo_heavy_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('anjeos_light', {
      fields: ['order_owner_id'],
      type: 'foreign key',
      name: 'fk_order_owner',
      references: {
        table: 'orders',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('anjeos_heavy', {
      fields: ['order_owner_id'],
      type: 'foreign key',
      name: 'fk_order_owner',
      references: {
        table: 'orders',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('users', 'fk_orders');
    await queryInterface.removeConstraint('orders', 'fk_user_owner');
    await queryInterface.removeConstraint('orders', 'fk_anjeos_light');
    await queryInterface.removeConstraint('orders', 'fk_anjeos_heavy');
    await queryInterface.removeConstraint('anjeos_light', 'fk_order_owner');
    await queryInterface.removeConstraint('anjeos_heavy', 'fk_order_owner');

  }

};
