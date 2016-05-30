var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var materiaDAO = require('../data-access/materiaDAO');

function validCreateRequest(nombre, codigo){
    return !(!nombre || !codigo);
}

function validRemoveRequest(codigo){
    return !(!codigo);
}

function create(nombre, codigo, callback){
  if (!validCreateRequest(nombre, codigo))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.MATERIA_REQ_CREATE);
  materiaDAO.create(nombre, codigo, function(err, materia){
    callback(err, status.STATUS_OK, responseMessages.CREATE_SUCC + ' ' + materia._id)
  });
}

function find(callback){
  materiaDAO.find(function(err, materias){
    callback(err, status.STATUS_OK, materias);
  });
}

function remove(codigo, callback){
  if (!validRemoveRequest(codigo))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.MATERIA_REQ_DELETE);
  materiaDAO.remove(codigo, function(err){
    callback(err, status.STATUS_OK, responseMessages.DELETE_SUCC);
  });
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
