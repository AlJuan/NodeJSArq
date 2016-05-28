var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Curso = require('../model/curso');
var mongoose = require('mongoose');

function doCreate(req, res){
  if (!req.body.materiaId || !req.body.horario || !req.body.cuatrimestreId){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.CURSO_REQ_CREATE);
    return;
  }
  var curso = {
    materia: mongoose.Types.ObjectId(req.body.materiaId),
    horario: req.body.horario,
    nroDeCurso: req.body.nroDeCurso,
    cuatrimestre: mongoose.Types.ObjectId(req.body.cuatrimestreId)
  };
  Curso.create(curso, function(err, curso){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.CREATE_SUCC + ' ' + curso._id);
  });
}

function doList(req, res){
  Curso.find({})
    .populate('materia')
    .populate('cuatrimestre')
    .exec(function(err, cursos){
    if (err) throw err;
    res.status(status.STATUS_OK).json(cursos);
  });
}

function doDelete(req, res){
  if (!req.params.id){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.CURSO_REQ_DELETE);
    return;
  }
  Curso.remove({_id: req.params.id}, function(err){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.DELETE_SUCC);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
