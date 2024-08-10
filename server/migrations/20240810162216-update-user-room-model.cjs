'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('UserRooms', 'role', {
      type: Sequelize.ENUM('host', 'participant'),
      allowNull: false,
      defaultValue: 'participant'
    });
    // Add any other changes to the UserRoom model here
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('UserRooms', 'role');
    // Revert any other changes here
  }
};

