var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var cursoDAO = require('../data-access/cursoDAO');
var cuatrimestreService = require('./cuatrimestreService');

function validCreateRequest(materia, horario, cuatrimestre, nroDeCurso){
    return !(!horario || !materia || !cuatrimestre || !nroDeCurso);
}

function validRemoveRequest(id){
    return !(!id);
}

function create(materia, horario, cuatrimestre, nroDeCurso, callback){
  if (!validCreateRequest(materia, horario, cuatrimestre, nroDeCurso))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CURSO_REQ_CREATE);
  cursoDAO.create(materia, horario, cuatrimestre, nroDeCurso, function(err, curso){
    callback(err, status.STATUS_OK, responseMessages.CREATE_SUCC + ' ' + curso._id)
  });
}

function find(callback){
  cursoDAO.find(function(err, cursos){
    callback(err, status.STATUS_OK, cursos);
  });
}

function findThisSemesterCourses(callback){
  var cuatri = cuatrimestreService.getActualCuatrimestre();
  cursoDAO.findByCuatrimestre(cuatri, callback);
}

function remove(id, callback){
  if (!validRemoveRequest(id))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CURSO_REQ_DELETE);
  cursoDAO.remove(id, function(err){
    callback(err, status.STATUS_OK, responseMessages.DELETE_SUCC);
  });
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.findThisSemesterCourses = findThisSemesterCourses;
