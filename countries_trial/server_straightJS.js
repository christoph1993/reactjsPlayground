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
app.use(express.static(__dirname + '/src'));

app.set('views',__dirname + 'views');
app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render(path.join(__dirname,'views/pages','home.ejs'));
});

app.listen(config.server.port,function() {
	console.log("Listening on " + config.server.port.toString());
});