var materiaDAO = require('../data-access/materiaDAO');
var cursoDAO = require('../data-access/cursoDAO');
var usuarioDAO = require('../data-access/usuarioDAO');
var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');

function inscribirse(codigo, nroCurso, username, callback){
  materiaDAO.findByCodigo(codigo, function(err, materia){
    if (err) throw err;
    cursoDAO.findByMateriaAndNro(materia, nroCurso, function(err, curso){
      if (err) throw err;
      usuarioDAO.addCurso(username, curso, function(err) {
        if (err) throw err;
        callback(err, status.STATUS_OK, responseMessages.INSCRI_SUCC);
      });
    });
  });
}

function list(username, callback){
  usuarioDAO.find(username, function(err, usuario){
    if (err) throw err;
    callback(err, status.STATUS_OK, usuario.cursos);
  });
}

module.exports.inscribirse = inscribirse;
module.exports.list = list;
