var status = require('./constants/status');
var responseMessages = require('./constants/responsemessages');
var config = require('./constants/config');
var jwt = require('jsonwebtoken');

function handleLogin(req, res){
  if (!req.body.username){
    returnMessage(res, status.STATUS_BAD_REQUEST, responseMessages.USERNAME_REQ);
    return;
  }
  if (!req.body.password){
    returnMessage(res, status.STATUS_BAD_REQUEST, responseMessages.PASSWD_REQ);
    return;
  }
  var token = jwt.sign({username: req.body.username}, config.TOKEN_SECRET);
  return returnJSON(res, status.STATUS_OK, token);
}


/*
*Funciones auxiliares para enviar respuestas
*/
function returnMessage(res, status, msg){
  res.status(status).send(msg);
}

function returnJSON(res, status, json){
  res.status(status).json(json);
}

module.exports.handleLogin = handleLogin;
