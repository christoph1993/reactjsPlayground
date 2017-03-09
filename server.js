var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var mysql = require("mysql");
var ejs = require("ejs");
var config = require("./config.json");

var app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('views',__dirname + 'views');
app.set('view engine','ejs');



app.listen(config.server.port,function() {
	console.log("Listening on " + config.server.port.toString());
});