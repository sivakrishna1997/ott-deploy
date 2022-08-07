global.root=__dirname;
var config = require('./config/config');
var express = require('./config/express');
var app = express();

app.listen( process.env.PORT || config.port);
console.log("your port number:" + config.port);
