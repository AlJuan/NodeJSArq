var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var cursoDAO = require('../data-access/cursoDAO');

function validCreateRequest(materia, horario, cuatrimestre, nroDeCurso){
    return !(!horario || !materia || !cuatrimestre || !nroDeCurso);
}

function validRemoveRequest(id){
    return !(!id);
}

function create(materia, horario, cuatrimestre, nroDeCurso, callback){
  if (!validCreateRequest(materia, horario, cuatrimestre, nroDeCurso))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CURSO_REQ_CREATE);
  cursoDAO.create(materia, horario, cuatrimestre, nroDeCurso, callback);
}

function find(callback){
  cursoDAO.find(callback);
}

function remove(id, callback){
  if (!validRemoveRequest(id))
    return callback(null, status.STATUS_BAD_REQUEST, responseMessages.CURSO_REQ_DELETE);
  cursoDAO.remove(id, callback);
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
