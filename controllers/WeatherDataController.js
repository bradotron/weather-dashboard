const WeatherData = require("../models/weatherdata").WeatherData;
module.exports = {
  create(req, res) {
    return WeatherData.create({
      temperature: req.body.temperature
    })
      .then(weatherdata => res.status(201).send(weatherdata))
      .catch(error => res.status(400).send(error));
  }
};
