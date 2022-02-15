"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John Doe",
          lastName: "aadad",
          email: "dimasrakas@gmail.com",
          createdAt: "2020-01-01",
          updatedAt: "2020-01-01",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
