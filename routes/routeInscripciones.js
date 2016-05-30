var inscripcionesService = require('../service/inscripcionesService');

function doInscribirse(req, res){
  inscripcionesService.inscribirse(req.params.codigo, req.params.nroCurso, req.user, function(err, status, msg){
    if (err) throw err;
    res.status(status).send(msg);
    console.log("routeInscripciones -> inscripcion realizada!");
  });
}

function doList(req, res){
  inscripcionesService.list(req.user, function(err, status, msg){
    if (err) throw err;
    res.status(status).json(msg);
    console.log("routeInscripciones -> inscripciones listadas!");
  });

}

module.exports.doInscribirse = doInscribirse;
module.exports.doList = doList;
