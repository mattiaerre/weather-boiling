var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var defaults = { minutes: 4, seconds: 26 };
    if (req.cookies.paceCalculatorDefaults) {
        defaults.minutes = req.cookies.paceCalculatorDefaults.minutes;
        defaults.seconds = req.cookies.paceCalculatorDefaults.seconds;
    }
    res.send(defaults);
});

router.post('/', function (req, res, next) {
    var defaults = req.body.paceCalculatorDefaults;
    res.cookie('paceCalculatorDefaults', defaults, { maxAge: 900000, httpOnly: true }); // info: not sure about this "httpOnly" property
    res.send(defaults);
});

module.exports = router;