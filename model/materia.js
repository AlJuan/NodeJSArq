var mongoose = require('mongoose');

var schema = mongoose.Schema({
  nombre: String,
  codigo: String
});

module.exports = mongoose.model('Materia', schema);
