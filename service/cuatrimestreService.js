var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var cuatrimestreDAO = require('../data-access/cuatrimestreDAO');
var Cuatrimestre = require('../model/cuatrimestre');

function validCreateRequest(semestre, anio){
    return!(!semestre || !anio);
}

function create(semestre, anio, callback){
  if (!validCreateRequest(semestre, anio))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CUATRIMESTRE_REQ_CREATE);
  cuatrimestreDAO.create(semestre, anio, function(err, cuatrimestre){
    callback(err, status.STATUS_OK, responseMessages.CREATE_SUCC + ' ' + cuatrimestre._id)
  });

}

function find(callback){
  cuatrimestreDAO.find(function(err, cuatrimestres){
    callback(err, status.STATUS_OK, cuatrimestres);
  });
}

function remove(semestre, anio, callback){
  if (!validCreateRequest(semestre, anio))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CUATRIMESTRE_REQ_DELETE);
  cuatrimestreDAO.remove(semestre, anio, function(err){
    callback(err, status.STATUS_OK, responseMessages.DELETE_SUCC);
  });
}

function getActualCuatrimestre(){
  var today = new Date();
  var month = today.getMonth();
  var year = today.getFullYear();
  var cuatrimestre = new Cuatrimestre();
  cuatrimestre.semestre = (month <= 6)? 1 : 2;
  cuatrimestre.anio = year;
  return cuatrimestre;
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.getActualCuatrimestre = getActualCuatrimestre;
