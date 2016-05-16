var status = require('../constants/status');
var responseMessages = require('../constants/responsemessages');
var config = require('../constants/config');
var jwt = require('jsonwebtoken');
var Usuario = require('../model/usuario');

function doLogin(req, res){
  if (!req.body.username){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.USERNAME_REQ);
    return;
  }
  if (!req.body.password){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.PASSWD_REQ);
    return;
  }
  Usuario.findOne({nombre: req.body.username}, function(err, result){
    if (err) throw err;
    if (result && result.password == req.body.password){
      var token = jwt.sign({username: req.body.username}, config.TOKEN_SECRET);
      console.log('%s logueado!', req.body.username);
      res.status(status.STATUS_OK).json(token);
    } else {
      res.status(status.STATUS_UNAUTHORIZED).send(responseMessages.INVALID_CRED);
    }
  });
}

function doRegister(req, res){
  if (!req.body.username){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.USERNAME_REQ);
    return;
  }
  if (!req.body.password){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.PASSWD_REQ);
    return;
  }
  var nuevoUsuario = new Usuario({nombre: req.body.username, password: req.body.password});
  nuevoUsuario.save(function(err){
    if (err) throw err;
  });
  res.status(status.STATUS_OK).json(req.body.username + ' ' + responseMessages.REGISTER_SUCC);
}

function authenticate(req, res, next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
      jwt.verify(token, config.TOKEN_SECRET, function(err, decoded){
        if (err) throw err;
        req.user = decoded;
        next();
      });
  } else {
    res.status(status.STATUS_UNAUTHORIZED).send(responseMessages.INVALID_CRED);
  }
}


module.exports.doLogin = doLogin;
module.exports.doRegister = doRegister;
module.exports.authenticate = authenticate;
