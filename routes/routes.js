var login = require('./login');
var materias = require('./crudMaterias');
var cuatrimestres = require('./routeCuatrimestre');
var cursos = require('./routeCursos');
module.exports = function (app){
  app.post('/login', login.doLogin);
  app.post('/register', login.doRegister);
  app.get('/materias', materias.doList);
  app.post('/materias', login.authenticate,  materias.doCreate);
  app.delete('/materias', login.authenticate,  materias.doDelete);
  app.get('/cuatrimestres', cuatrimestres.doList);
  app.post('/cuatrimestres', login.authenticate,  cuatrimestres.doCreate);
  app.delete('/cuatrimestres', login.authenticate,  cuatrimestres.doDelete);
  app.get('/cursos', cursos.doList);
  app.post('/cursos', login.authenticate,  cursos.doCreate);
  app.delete('/cursos/:id', login.authenticate,  cursos.doDelete);
}
