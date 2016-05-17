var login = require('./login');
var materias = require('./crudMaterias');
var horarios = require('./crudHorarios');
var cuatrimestres = require('./crudCuatrimestres');
var cursos = require('./crudCursos');
module.exports = function (app){
  app.post('/login', login.doLogin);
  app.post('/register', login.doRegister);
  app.get('/materias', materias.doList);
  app.post('/materias', login.authenticate,  materias.doCreate);
  app.delete('/materias', login.authenticate,  materias.doDelete);
  app.get('/horarios', horarios.doList);
  app.post('/horarios', login.authenticate,  horarios.doCreate);
  app.delete('/horarios', login.authenticate,  horarios.doDelete);
  app.get('/cuatrimestres', cuatrimestres.doList);
  app.post('/cuatrimestres', login.authenticate,  cuatrimestres.doCreate);
  app.delete('/cuatrimestres', login.authenticate,  cuatrimestres.doDelete);
  app.get('/cursos', cursos.doList);
  app.post('/cursos', login.authenticate,  cursos.doCreate);
  app.delete('/cursos/:id', login.authenticate,  cursos.doDelete);
}
