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
        temperature: 76.2
      },
      {
        temperature: 77.2,
      },
      {
        temperature: 79.2,
      },
      {
        temperature: 81.5,
      },
      {
        temperature: 79.6,
      },
      {
        temperature: 78.3,
      },
      {
        temperature: 75.8,
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
