"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("WeatherData", [
      {
        temperature: 76.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        temperature: 77.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        temperature: 79.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        temperature: 81.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        temperature: 79.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        temperature: 78.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        temperature: 75.8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
