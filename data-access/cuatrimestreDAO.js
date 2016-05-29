var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Cuatrimestre = require('../model/cuatrimestre');

function create(semestre, anio, callback){
  Cuatrimestre.create({
    semestre: semestre,
    anio: anio
  }, function(err, cuatrimestre){
    callback(err, status.STATUS_OK, responseMessages.CREATE_SUCC + ' ' + cuatrimestre._id)
  });
}

function find(callback){
  Cuatrimestre.find({}, function(err, cuatrimestres){
    callback(err, status.STATUS_OK, cuatrimestres);
  });
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
  }, function(err){
    callback(err, status.STATUS_OK, responseMessages.DELETE_SUCC);
  });
}


module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.findByFilter = findByFilter;
