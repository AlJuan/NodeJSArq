var Curso = require('../model/curso');
var cuatrimestreDAO = require('./cuatrimestreDAO');

function create(materiaId, horario, cuatrimestreId, nroDeCurso, callback){
  Curso.create({
    materia: materiaId,
    horario: horario,
    nroDeCurso: nroDeCurso,
    cuatrimestre: cuatrimestreId
  }, callback);
}

function find(callback){
  Curso.find({})
    .populate('materia')
    .populate('cuatrimestre')
    .exec(callback);
}

function findByMateriaAndNro(materia, nro, callback){
  Curso.findOne({
    materia: materia._id,
    nroDeCurso: nro
  }).populate('materia')
    .populate('cuatrimestre')
    .exec(function(err, cursos){
      callback(err, cursos);
  });
}

function findByCuatrimestre(cuatrimestre, callback){
  cuatrimestreDAO.findByFilter(cuatrimestre, function(err, cuatri){
    if (err) throw err;
    Curso.find({cuatrimestre: cuatri.id})
      .populate('materia')
      .populate('cuatrimestre')
      .exec(callback);
  });
}

function remove(id, callback){
  Curso.remove({_id: id}, callback);
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.findByCuatrimestre = findByCuatrimestre;
module.exports.findByMateriaAndNro = findByMateriaAndNro;
