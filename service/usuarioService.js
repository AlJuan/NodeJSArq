var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var config = require('../constants/config');
var jwt = require('jsonwebtoken');
var usuarioDAO = require('../data-access/usuarioDAO');

function validLoginRequest(user, pass){
    return!(!user || !pass);
}

function getToken(username){
  return jwt.sign({username: username}, config.TOKEN_SECRET);
}

function login(username, pass, callback){
  if (!validLoginRequest(username, pass)){
    if (!username) return callback(null, status.STATUS_BAD_REQUEST, responseMessages.USERNAME_REQ);
    else return callback(null, status.STATUS_BAD_REQUEST, responseMessages.PASSWD_REQ);
  }
  usuarioDAO.find(username, function(err, user){
    if (err) throw err;
    if (user && user.password == pass){
      var token = getToken(username);
      console.log('%s logueado!', username);
      callback(err, status.STATUS_OK, token);
    } else {
      callback(err, status.STATUS_UNAUTHORIZED, responseMessages.INVALID_CRED);
    }
  });
}

function register(username, pass, callback){
  if (!validLoginRequest(username, pass)){
    if (!username) return callback(null, status.STATUS_BAD_REQUEST, responseMessages.USERNAME_REQ);
    else return callback(null, status.STATUS_BAD_REQUEST, responseMessages.PASSWD_REQ);
  }
  usuarioDAO.save(username, pass, callback);
}

function authenticate(token, callback) {
  if (token) {
    jwt.verify(token, config.TOKEN_SECRET, function(err, decoded){
      if (err)
        callback(err, status.STATUS_UNAUTHORIZED, responseMessages.INVALID_CRED);
      callback(err, status.STATUS_OK, decoded);
    });
  } else {
    callback(null, status.STATUS_UNAUTHORIZED, responseMessages.INVALID_CRED);
  }
}

module.exports.login = login;
module.exports.authenticate = authenticate;
module.exports.register = register;
