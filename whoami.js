var express = require("express"),
router = express.Router();
router.get('/',function(req,res){
    
    res.send(JSON.stringify({
        ipaddress:req.headers["x-forwarded-for"]
        ,language:req.headers["accept-language"].split(",")[0],
        software:req.headers["user-agent"].split("(")[1].split(")")[0]
    }));
    
     //res.send(req.headers);
});
module.exports = router;
//https://clementine-raflor.c9users.io/whoami
//https://cryptic-ridge-9197.herokuapp.com/api/whoami/