var express = require('express');
var router = express.Router()

router.get('/', function (req, res) {
  console.log('api home route');
  res.send('api home');
});

router.get('/test', function (req, res) {
  res.send('api test pass');
});

module.exports = router;