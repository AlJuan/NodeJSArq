var materiaDAO = require('../data-access/materiaDAO');
var cursoDAO = require('../data-access/cursoDAO');
var usuarioDAO = require('../data-access/usuarioDAO');
var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');

var MAX_INSCRIP = 7;

function validateInscrip(username, callback){
  usuarioDAO.find(username, function(err, usuario){
    callback(err, usuario.cursos.length < MAX_INSCRIP);
  });
}

function inscribirse(codigo, nroCurso, username, callback){
  materiaDAO.findByCodigo(codigo, function(err, materia){
    if (err) throw err;
    cursoDAO.findByMateriaAndNro(materia, nroCurso, function(err, curso){
      if (err) throw err;
      validateInscrip(username, function (err, valid){
        if (err) throw err;
        if (!valid) return callback(err, status.STATUS_OK, responseMessages.INSCRIP_MAX_SUPERADO);
        usuarioDAO.addCurso(username, curso, function(err) {
          if (err) throw err;
          callback(err, status.STATUS_OK, responseMessages.INSCRI_SUCC);
        });
      });
    });
  });
}

function desinscribirse(codigo, nroCurso, username, callback){
  materiaDAO.findByCodigo(codigo, function(err, materia){
    if (err) throw err;
    cursoDAO.findByMateriaAndNro(materia, nroCurso, function(err, curso){
      if (err) throw err;
      usuarioDAO.removeCurso(username, curso, function(err) {
        if (err) throw err;
        callback(err, status.STATUS_OK, responseMessages.DESINSCRI_SUCC);
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
module.exports.desinscribirse = desinscribirse;
