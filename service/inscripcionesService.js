var materiaDAO = require('../data-access/materiaDAO');
var cursoDAO = require('../data-access/cursoDAO');
var usuarioDAO = require('../data-access/usuarioDAO');
var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var cuatrimestreService = require('./cuatrimestreService');

var MAX_INSCRIP = 5;

function validateInscrip(username, codigo, nroCurso, curso, callback){
  usuarioDAO.find(username, function(err, usuario){
    if (err) throw err;
    var valid = true;
    var msg = null;
    usuario.cursos.forEach(function (curso){
      if (curso.materia.codigo == codigo){
        valid = false;
        msg = responseMessages.INSCRIP_MATERIA_DUP;
        return;
      }
    });
    var cuatrimestreActual = cuatrimestreService.getActualCuatrimestre();
    if (curso.cuatrimestre.semestre != cuatrimestreActual.semestre
      || curso.cuatrimestre.anio != cuatrimestreActual.anio){
        return callback(err, false, responseMessages.CURSO_NOT_FOUND_ACTUAL_CUAT);
      }
    valid = (valid)? usuario.cursos.length < MAX_INSCRIP : valid;
    msg = (usuario.cursos.length < MAX_INSCRIP)? msg : responseMessages.INSCRIP_MAX_SUPERADO;
    callback(err, valid, msg);
  });
}



function inscribirse(codigo, nroCurso, username, callback){
  materiaDAO.findByCodigo(codigo, function(err, materia){
    if (err) throw err;
    if (!materia) return callback(err, status.STATUS_OK, responseMessages.MATERIA_NOT_FOUND);
    cursoDAO.findByMateriaAndNro(materia, nroCurso, function(err, curso){
      if (err) throw err;
      if (!curso) return callback(err, status.STATUS_OK, responseMessages.CURSO_NOT_FOUND);
      validateInscrip(username, codigo, nroCurso, curso, function (err, valid, msg){
        if (err) throw err;
        if (!valid) return callback(err, status.STATUS_OK, msg);
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
