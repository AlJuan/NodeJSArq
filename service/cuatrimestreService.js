var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Cuatrimestre = require('../model/cuatrimestre');
var cuatrimestreDAO = require('../data-access/cuatrimestreDAO');

function validCreateRequest(semestre, anio){
    return!(!semestre || !anio);
}

function create(semestre, anio, callback){
  if (!validCreateRequest(semestre, anio))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CUATRIMESTRE_REQ_CREATE);
  cuatrimestreDAO.create(semestre, anio, callback);
}

function find(callback){
  cuatrimestreDAO.find(callback);
}

function remove(semestre, anio, callback){
  if (!validCreateRequest(semestre, anio))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CUATRIMESTRE_REQ_DELETE);
  cuatrimestreDAO.remove(semestre, anio, callback);
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
