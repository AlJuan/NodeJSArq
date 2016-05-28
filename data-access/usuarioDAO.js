var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Usuario = require('../model/usuario');

function find(username, callback){
  Usuario.findOne({nombre: username}, function(err, user){
    callback(err, user);
  });
}

function save(username, pass, callback){
  var nuevoUsuario = new Usuario({nombre: username, password: pass});
  nuevoUsuario.save(function(err){
    if (err) throw err;
    callback(err, status.STATUS_OK, username + ' ' + responseMessages.REGISTER_SUCC)
  });
}

module.exports.find = find;
module.exports.save = save;
