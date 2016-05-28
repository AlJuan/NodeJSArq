var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Materia = require('../model/materia');

function create(nombre, codigo, callback){
  Materia.create({
    nombre: nombre,
    codigo: codigo
  }, function(err, materia){
    callback(err, status.STATUS_OK, responseMessages.CREATE_SUCC + ' ' + materia._id)
  });
}

function find(callback){
  Materia.find({}, function(err, materias){
    callback(err, status.STATUS_OK, materias);
  });
}

function remove(codigo, callback){
  Materia.remove({codigo: codigo}, function(err){
    callback(err, status.STATUS_OK, responseMessages.DELETE_SUCC);
  });
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
