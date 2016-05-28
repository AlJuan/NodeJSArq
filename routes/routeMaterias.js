var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var materiaService = require('../service/materiaService');

function doCreate(req, res){
  materiaService.create(req.body.nombre, req.body.codigo, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
  });
}

function doList(req, res){
  materiaService.find(function(err, status, materias){
    if (err) throw err;
    res.status(status).json(materias);
  });
}

function doDelete(req, res){
  materiaService.remove(req.body.codigo, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
