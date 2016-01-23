var mongoose = require("mongoose");

var url_schema = mongoose.Schema({
    original_url: String,
    short_url: String

});
var counter_schema = mongoose.Schema({
    counter: Number
});
var provider = function(){};
provider.counter = mongoose.model('counter', counter_schema);
provider.url = mongoose.model('urls', url_schema);

module.exports = provider;