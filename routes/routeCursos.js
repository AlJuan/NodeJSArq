var responseMessages = require('../constants/responsemessages');
var status = require('../constants/status');
var Curso = require('../model/curso');
var cursoService = require('../service/cursoService');
var mongoose = require('mongoose');

function doCreate(req, res){
  cursoService.create(mongoose.Types.ObjectId(req.body.materiaId),
                      req.body.horario,
                      mongoose.Types.ObjectId(req.body.cuatrimestreId),
                      req.body.nroDeCurso,
                      function(err, status, msg){
                        if (err) throw err;
                        res.status(status).send(msg);
                      });
}

function doList(req, res){
  cursoService.find(function(err, status, cursos){
    if (err) throw err;
    res.status(status).json(cursos);
  });
}

function doDelete(req, res){
  cursoService.remove(req.params.id, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
