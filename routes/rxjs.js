var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('rxjs', { title: 'TODO' });
});

module.exports = router;
