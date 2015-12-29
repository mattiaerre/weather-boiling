var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var todos = [
        { description: 'do the shopping' },
        { description: 'call the police' }
    ];

    res.send(todos);
});

module.exports = router;