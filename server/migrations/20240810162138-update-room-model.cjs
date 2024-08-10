'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Rooms', 'participants');
    // Add any other changes to the Room model here
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Rooms', 'participants', {
      type: Sequelize.JSON,
      defaultValue: []
    });
    // Revert any other changes here
  }
};

