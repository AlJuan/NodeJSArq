var mongoose = require('mongoose');

var schema = mongoose.Schema({
  this.dia: String,
  this.hora: String
});

mongoose.model('Horario', schema);
