var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var materiaService = require('../service/materiaService');

function doCreate(req, res){
  materiaService.create(req.body.nombre, req.body.codigo, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
    console.log("routeMaterias -> materia creada!");
  });
}

function doList(req, res){
  materiaService.find(function(err, status, materias){
    if (err) throw err;
    res.status(status).json(materias);
    console.log("routeMaterias -> materias listadas!");
  });
}

function doDelete(req, res){
  materiaService.remove(req.body.codigo, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
    console.log("routeMaterias -> materia eliminada!");
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
