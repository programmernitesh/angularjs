
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

var router = express.Router();

router.get('/Sum ', function(req, res){
 var a = req.query.a;
 var b = res.query.b;
 var c = parseInt(a) + parseInt(b);
 res.end('Hello World!\n');
 res.status(200).json(c);
});

app.use("/",router);
app.listen("3000", function(){
    console.log("started listening at 3000");
});