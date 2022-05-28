"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      idRestaurant: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "Restaurant",
          key: "id",
        },
      },
      idAccount: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "User",
          key: "id",
        },
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Likes");
  },
};
