var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  //res.redirect(302, '/rxjs');
  res.render('index', { title: 'weather-boiling' });
});

module.exports = router;
