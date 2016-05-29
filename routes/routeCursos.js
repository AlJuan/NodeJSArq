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
                        console.log("routeCursos -> curso creado!");
                      });
}

function doList(req, res){
  cursoService.find(function(err, status, cursos){
    if (err) throw err;
    res.status(status).json(cursos);
    console.log("routeCursos -> cursos listados!");
  });
}

function doDelete(req, res){
  cursoService.remove(req.params.id, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
    console.log("routeCursos -> cursos eliminados!");
  });
}

function doListSemester(req, res){
  cursoService.findThisSemesterCourses(function (err, stat, msg){
    if (err) throw err;
    res.status(stat).json(msg);
    console.log("routeCursos -> cursos de este cuatrimestre listados!");
  });
}

module.exports.doCreate = doCreate;
module.exports.doList = doList;
module.exports.doDelete = doDelete;
module.exports.doListSemester = doListSemester;
