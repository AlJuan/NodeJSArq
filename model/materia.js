var mongoose = require('mongoose');

var schema = mongoose.Schema({
  descripcion: String,
  codigo: String
});

module.exports = mongoose.model('Materia', schema);
