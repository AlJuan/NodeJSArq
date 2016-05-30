var Cuatrimestre = require('../model/cuatrimestre');

function create(semestre, anio, callback){
  Cuatrimestre.create({
    semestre: semestre,
    anio: anio
  }, callback);
}

function find(callback){
  Cuatrimestre.find({}, callback);
}

function findByFilter(cuatrimestre, callback){
  Cuatrimestre.findOne({
    semestre: cuatrimestre.semestre,
    anio: cuatrimestre.anio
  }, callback);
}

function remove(semestre, anio, callback){
  Cuatrimestre.remove({
    semestre: semestre,
    anio: anio
  },callback);
}


module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.findByFilter = findByFilter;
