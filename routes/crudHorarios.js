var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Horario = require('../model/horario');

function doCreate(req, res){
  if (!req.body.dia || !req.body.hora){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.HORARIO_REQ_CREATE);
    return;
  }
  Horario.create({
    dia: req.body.dia,
    hora: req.body.hora
  }, function(err, horario){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.CREATE_SUCC + ' ' + horario._id);
  });
}

function doList(req, res){
  Horario.find({}, function(err, horarios){
    if (err) throw err;
    res.status(status.STATUS_OK).json(horarios);
  });
}

function doDelete(req, res){
  if (!req.body.dia || !req.body.hora){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.HORARIO_REQ_DELETE);
    return;
  }
  Horario.remove({
    dia: req.body.dia,
    hora: req.body.hora
  }, function(err){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.DELETE_SUCC);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
