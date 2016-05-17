var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Curso = require('../model/curso');

function doCreate(req, res){
  console.log('%j', req.body);
  if (!req.body.materiaId || !req.body.horariosId || !req.body.cuatrimestreId){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.CURSO_REQ_CREATE);
    return;
  }
  //TODO NO ESTA GUARDANDO UN ARRAY
  Curso.create({
    materia: req.body.materiaId,
    horariosId: req.body.horariosId,
    cuatrimestre: req.body.cuatrimestreId
  }, function(err, curso){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.CREATE_SUCC + ' ' + curso._id);
  });
}

function doList(req, res){
  Curso.find({})
    .populate('materia')
    .populate('horarios')
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
