var Usuario = require('../model/usuario');

function find(username, callback){
  Usuario.findOne({nombre: username}).populate('cursos').exec(callback);
}

function save(username, pass, callback){
  var nuevoUsuario = new Usuario({nombre: username, password: pass});
  nuevoUsuario.save(callback);
}

function addCurso(username, curso, callback){
  Usuario.findOneAndUpdate({nomre: username}, {$push: {cursos: curso}}, {safe: true},
  callback);

}

module.exports.find = find;
module.exports.save = save;
module.exports.addCurso = addCurso;
