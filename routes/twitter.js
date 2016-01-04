var express = require('express');
var Twitter = require('twitter');
var router = express.Router();

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

router.get('/', function (req, res, next) {
    client.stream('statuses/filter', { track: req.query.track }, function (stream) {
        stream.on('data', function (tweet) {
            console.log(tweet.text);
            
            // destroy stream after 10"
            var timeoutId = setTimeout(function () {
                console.log('info: stream.destroy()');
                stream.destroy();
            }, 10000);
        });

        stream.on('error', function (error) {
            throw error;
        });
    });

    res.send('(╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻');
});

module.exports = router;