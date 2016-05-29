var status = require('../constants/status');
var usuarioService = require('../service/usuarioService');

function doLogin(req, res){
  usuarioService.login(req.body.username, req.body.password, function(err, stat, msg){
    if (err) throw err;
    if (stat == status.STATUS_OK){
      res.status(stat).json(msg);
      console.log("routeLogin -> usuario logueado!");
    } else {
      res.status(stat).send(msg);
    }
  });
}

function doRegister(req, res){
  usuarioService.register(req.body.username, req.body.password, function (err, stat, msg){
    if (err) throw err;
    if (stat == status.STATUS_OK){
      res.status(stat).json(msg);
      console.log("routeLogin -> usuario registrado!");
    } else {
      res.status(stat).send(msg);
    }
  });
}

function authenticate(req, res, next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  usuarioService.authenticate(token, function(err, stat, msg){
    if (err) return res.status(stat).send(msg);
    req.user = msg;
    next();
  });
}

module.exports.doLogin = doLogin;
module.exports.doRegister = doRegister;
module.exports.authenticate = authenticate;
