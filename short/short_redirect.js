var express = require("express"),
    mongoose = require('mongoose'),
    provider = require("./models.js"),
    router = express.Router();
    
router.get('/:id',function(req, res){
    var search = 'https://clementine-raflor.c9users.io/s/' + req.params.id;
    provider.url.findOne({short_url: search},function(err,doc){
        if(err) return console.error(err);
        res.redirect(doc.original_url);
    });
    
});
module.exports = router;