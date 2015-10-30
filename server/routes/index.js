/**
 * Created by lahusiak on 10/30/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');

var addAnswer;
var subtractAnswer;
var multiplyAnswer;
var divideAnswer;

router.route('/data')
    .get(function(req, res){
        res.send("Hello");
        console.log("This is get")
    })
    .post(function(req, res){
        //console.log(req.body.xInput);
        //res.send({message: "Hello " + req.body.xInput});
        if(req.body.mathOperation == "add"||"Add"||"+"){
            addAnswer = (parseInt(req.body.xInput) + parseInt(req.body.yInput));
            //res.send("This is addAnswer", addAnswer);
        } else if(req.body.mathOperation == "subtract"){
            subtractAnswer = ((parseInt(req.body.xInput)) - (parseInt(req.body.yInput)));
            //res.send("This is subtractAnswer", subtractAnswer);
        } else if(req.body.mathOperation == "multiply"){
            multiplyAnswer = (parseInt(req.body.xInput) * parseInt(req.body.yInput));
            //res.send("This is mutiplyAnswer", multiplyAnswer);
        } else if(req.body.mathOperation == "divide"){
            divideAnswer = (parseInt(req.body.xInput) / parseInt(req.body.yInput));
            //res.send("This is divideAnswer", divideAnswer);
        } else {
            res.send("Invalid entry");
        }
        console.log("This is an addanswer", addAnswer);
        console.log("This is subtractAnswer", subtractAnswer);
        console.log("This is multiply", multiplyAnswer);
        console.log("This is divide", divideAnswer);
        //able to console log the above, not able to get info back to client side
    });


router.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;