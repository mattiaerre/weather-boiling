var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var marathons = require('../data/marathons.json');
    res.send(marathons);
});

module.exports = router;