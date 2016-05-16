var login = require('./login');
var materias = require('./crudMaterias');
module.exports = function (app){
  app.post('/login', login.doLogin);
  app.post('/register', login.doRegister);
  app.get('/materias', materias.doList);
  app.post('/materias', login.authenticate,  materias.doCreate);
}
