var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Materia = require('../model/materia');

function doCreate(req, res){
  if (!req.body.nombre || !req.body.codigo){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.MATERIA_REQ);
    return;
  }
  Materia.create({
    nombre: req.body.nombre,
    codigo: req.body.codigo
  }, function(err, materia){
    if (err) throw err;
  });
  res.status(status.STATUS_OK).send(responseMessages.CREATE_SUCC);
}

function doList(req, res){
  Materia.find({}, function(err, materias){
    if (err) throw err;
    res.status(status.STATUS_OK).json(materias);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
