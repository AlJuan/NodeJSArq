var Usuario = require('../model/usuario');
var mongoose = require('mongoose');

function find(username, callback){
  Usuario.findOne({nombre: username})
    .populate({path: 'cursos', populate: {path: 'materia cuatrimestre'}})
    .exec(callback);
}

function save(username, pass, callback){
  var nuevoUsuario = new Usuario({nombre: username, password: pass});
  nuevoUsuario.save(callback);
}

function addCurso(username, curso, callback){
  Usuario.findOneAndUpdate({nombre: username},
    {$push: {cursos: mongoose.Types.ObjectId(curso._id)}}, {safe: true},
  callback);
}

function removeCurso(username, curso, callback){
  Usuario.findOneAndUpdate({nombre: username},
    {$pull: {cursos: mongoose.Types.ObjectId(curso._id)}}, {safe: true},
  callback);
}

module.exports.find = find;
module.exports.save = save;
module.exports.addCurso = addCurso;
module.exports.removeCurso = removeCurso;
