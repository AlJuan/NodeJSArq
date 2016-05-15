//Express framework
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //Para application/json
app.use(bodyParser.urlencoded({ extended: true })); //Para application/x-www-form-urlencoded
//Integracion con Mongo-DB
var config = require('./constants/config');
var mongoose = require('mongoose');
mongoose.connect(config.DB_URL);

//Server init
var server = app.listen(8180, function () {
  var port = server.address().port;
  console.log("Servidor escuchando puerto %s", port);
})

require('./routes/routes')(app);
