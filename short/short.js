var express = require("express"),
    mongoose = require('mongoose'),
    provider = require("./models.js"),
    router = express.Router();

router.get('/*?', function(req, res) {
    provider.counter.findOneAndUpdate({}, {
        $inc: {
            counter: 1
        }
    }, {
        new: true
    }, function(err, count) {
        if (err) return console.error(err);
        ret_url(count.counter);

    });

    function ret_url(index) {
        new provider.url({
            original_url: req.params[0],
            short_url: 'https://clementine-raflor.c9users.io/s/' + index
        }).save(function(err, url) {
            if (err) return console.error(err);
            //console.log(url);
            res.send(JSON.stringify({
                original_url: url.original_url,
                short_url: url.short_url
            }));
        });
    }
});

module.exports = router;