var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Cuatrimestre = require('../model/cuatrimestre');

function doCreate(req, res){
  if (!req.body.semestre || !req.body.anio){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.CUATRIMESTRE_REQ_CREATE);
    return;
  }
  Cuatrimestre.create({
    semestre: req.body.semestre,
    anio: req.body.anio
  }, function(err, cuatrimestre){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.CREATE_SUCC + ' ' + cuatrimestre._id);
  });

}

function doList(req, res){
  Cuatrimestre.find({}, function(err, cuatrimestres){
    if (err) throw err;
    res.status(status.STATUS_OK).json(cuatrimestres);
  });
}

function doDelete(req, res){
  if (!req.body.semestre || !req.body.anio){
    res.status(status.STATUS_BAD_REQUEST).send(responseMessages.CUATRIMESTRE_REQ_DELETE);
    return;
  }
  Cuatrimestre.remove({
    semestre: req.body.semestre,
    anio: req.body.anio
  }, function(err){
    if (err) throw err;
    res.status(status.STATUS_OK).send(responseMessages.DELETE_SUCC);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
