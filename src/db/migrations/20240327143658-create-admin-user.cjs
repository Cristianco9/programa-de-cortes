'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      name: 'admin',
      date_creation: new Date(),
      rol: 'administrador',
      password: '$2a$11$8I0CpxzUm9IZmyBD9Q.tt.HtPtxE56lx2pPxZrhv6.J.7ZuxBhs..',
      email: 'admin@gmail.com'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { email: 'admin@gmail.com' }, {});
  }
};
