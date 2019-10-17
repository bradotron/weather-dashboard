var express = require("express");
var router = express.Router();
var WeatherDataController = require('../controllers/WeatherDataController');

router.get("/", function(req, res) {
  console.log("api home route");
  res.send("api home");
});

router.post("/WeatherData", function(req, res) {
  console.log("Posting Weather Data");
  WeatherDataController.create(req, res);
});

router.get("/test", function(req, res) {
  res.send("api test pass");
});

module.exports = router;
