var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Curso = require('../model/curso');
var cuatrimestreDAO = require('./cuatrimestreDAO');

function create(materiaId, horario, cuatrimestreId, nroDeCurso, callback){
  Curso.create({
    materia: materiaId,
    horario: horario,
    nroDeCurso: nroDeCurso,
    cuatrimestre: cuatrimestreId
  }, function(err, curso){
    callback(err, status.STATUS_OK, responseMessages.CREATE_SUCC + ' ' + curso._id)
  });
}

function find(callback){
  Curso.find({})
    .populate('materia')
    .populate('cuatrimestre')
    .exec(function(err, cursos){
      callback(err, status.STATUS_OK, cursos);
  });
}

function findByCuatrimestre(cuatrimestre, callback){
  cuatrimestreDAO.findByFilter(cuatrimestre, function(err, cuatri){
    if (err) throw err;
    Curso.find({cuatrimestre: cuatri.id})
      .populate('materia')
      .exec(function(err, cursos){
        callback(err, status.STATUS_OK, cursos);
    });
  });
}

function remove(id, callback){
  Curso.remove({_id: id}, function(err){
    callback(err, status.STATUS_OK, responseMessages.DELETE_SUCC);
  });
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.findByCuatrimestre = findByCuatrimestre;
