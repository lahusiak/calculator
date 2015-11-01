/**
 * Created by lahusiak on 10/30/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var result = require('./modules/calculate');
var bodyParser = require('body-parser');

var index = require('./routes/index');

app.set('port', process.env.PORT || 4999);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({expanded: true}));

app.use('/', index);

app.listen(app.get('port'), function(){
    console.log("Meow!" + app.get("port"));
});