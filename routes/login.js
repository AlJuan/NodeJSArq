var status = require('../constants/status');
var responseMessages = require('../constants/responsemessages');
var config = require('../constants/config');
var jwt = require('jsonwebtoken');

function doLogin(req, res){
  if (!req.body.username){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.USERNAME_REQ);
    return;
  }
  if (!req.body.password){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.PASSWD_REQ);
    return;
  }
  var token = jwt.sign({username: req.body.username}, config.TOKEN_SECRET);
  res.status(status.STATUS_OK).json(token);
  return;
}

module.exports.doLogin = doLogin;
