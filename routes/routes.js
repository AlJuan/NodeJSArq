var login = require('./login');

module.exports = function (app){
  app.post('/login', login.doLogin);

}
