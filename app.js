var express = require("express");
var app = express();
var path = require("path");
//config:
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

