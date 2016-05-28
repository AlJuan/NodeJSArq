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
  materiaDAO.create(nombre, codigo, callback);
}

function find(callback){
  materiaDAO.find(callback);
}

function remove(codigo, callback){
  if (!validRemoveRequest(codigo))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.MATERIA_REQ_DELETE);
  materiaDAO.remove(codigo, callback);
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
