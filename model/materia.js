var mongoose = require('mongoose');

var schema = mongoose.Schema({
  this.descripcion: String,
  this.codigo: String
});

mongoose.model('Materia', schema);
