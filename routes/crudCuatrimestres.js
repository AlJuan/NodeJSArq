var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Cuatrimestre = require('../model/cuatrimestre');
var cuatrimestreService = require('../service/cuatrimestreService');

function doCreate(req, res){
  cuatrimestreService.create(req.body.semestre, req.body.anio, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
  });
}

function doList(req, res){
  cuatrimestreService.find(function(err, status, cuatrimestres){
    if (err) throw err;
    res.status(status).json(cuatrimestres);
  });
}

function doDelete(req, res){
  cuatrimestreService.remove(req.body.semestre, req.body.anio, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
