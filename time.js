var express = require("express"),
url = require("url"),
router = express.Router();
router.get('/:time',function(req, res){
    var date = new Date(Date.parse(req.params.time));
    if(date){
        res.send(JSON.stringify({unix: date.getTime(), natural:date.toDateString()}));
    }
    else{
        res.send("not valid");
    }
});
module.exports=router;