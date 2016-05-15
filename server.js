var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //application/json
app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded

var requestHandlers = require('./requestHandlers');

//Server init
var server = app.listen(8180, function () {
  var port = server.address().port;
  console.log("Servidor escuchando puerto %s", port);
})

app.post('/login', function (req, res) {
  return requestHandlers.handleLogin(req, res);
})
