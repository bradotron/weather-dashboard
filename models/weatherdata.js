'use strict';
module.exports = (sequelize, DataTypes) => {
  var WeatherData = sequelize.define('WeatherData', {
    temperature: DataTypes.FLOAT,
  });

  return WeatherData;
};