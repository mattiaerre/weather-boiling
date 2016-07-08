var express = require('express');
var router = express.Router();
var version = require('../package.json').version;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'weather-boiling', version: 'v' + version });
});

module.exports = router;
