var Materia = require('../model/materia');

function create(nombre, codigo, callback){
  Materia.create({
    nombre: nombre,
    codigo: codigo
  }, callback);
}

function find(callback){
  Materia.find({}, callback);
}

function findByCodigo(codigo, callback){
  Materia.findOne({codigo: codigo}, callback);
}

function remove(codigo, callback){
  Materia.remove({codigo: codigo}, callback);
}

module.exports.create = create;
module.exports.find = find;
module.exports.remove = remove;
module.exports.findByCodigo = findByCodigo;
