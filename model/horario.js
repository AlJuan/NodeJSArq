var mongoose = require('mongoose');

var schema = mongoose.Schema({
  dia: String,
  hora: String
});

module.exports = mongoose.model('Horario', schema);
