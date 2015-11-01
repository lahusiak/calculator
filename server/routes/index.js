/**
 * Created by lahusiak on 10/30/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var calculate = require('../modules/calculate');


router.route('/index')
    .get(function(req, res){
        res.send("Hello");
    })
    .post(function(req, res){
        console.log(req.body);
        res.send({answer: calculate(req.body)});

    });

router.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;

//var addAnswer;
//var subtractAnswer;
//var multiplyAnswer;
//var divideAnswer;
//var answer = {};//res.send({message: "Hello " + req.body.xInput});

//if(req.body.mathOperation == "add"||"Add"||"+"){
//    answer = {answer:(parseInt(req.body.xInput) + parseInt(req.body.yInput))};
//    //res.send("This is addAnswer",{answer: addAnswer});
//} else if(req.body.mathOperation == "subtract"||"-"){
//    answer = {answer:(parseInt(req.body.xInput)) - (parseInt(req.body.yInput))};

//    res.send("This is subtractAnswer",{answer:subtractAnswer});
//} else if(req.body.mathOperation == "multiply"|| "x"){
//    answer = (parseInt(req.body.xInput) * parseInt(req.body.yInput));
//    res.send("This is mutiplyAnswer", {answer: multiplyAnswer});
//} else if(req.body.mathOperation == "divide"||"/"){
//    answer = (parseInt(req.body.xInput) / parseInt(req.body.yInput));
//    res.send("This is divideAnswer", {answer: divideAnswer});
//} else {
//    answer ="Invalid entry";
//res.send(answer);
//console.log("This is an addanswer", addAnswer);
//console.log("This is subtractAnswer", subtractAnswer);
//console.log("This is multiply", multiplyAnswer);
//console.log("This is divide", divideAnswer);
//able to console log the above, not able to get info back to client side
//res.send(addAnswer);
//console.log("This is addAnswer from get request");