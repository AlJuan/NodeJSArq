var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Materia = require('../model/materia');

function doCreate(req, res){
  if (!req.body.nombre || !req.body.codigo){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.MATERIA_REQ_CREATE);
    return;
  }
  Materia.create({
    nombre: req.body.nombre,
    codigo: req.body.codigo
  }, function(err, materia){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.CREATE_SUCC + ' ' + materia._id);
  });
}

function doList(req, res){
  Materia.find({}, function(err, materias){
    if (err) throw err;
    res.status(status.STATUS_OK).json(materias);
  });
}

function doDelete(req, res){
  if (!req.body.codigo){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.MATERIA_REQ_DELETE);
    return;
  }
  Materia.remove({codigo: req.body.codigo}, function(err){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.DELETE_SUCC);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
