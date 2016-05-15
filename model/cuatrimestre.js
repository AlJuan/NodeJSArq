var mongoose = require('mongoose');

var schema = mongoose.Schema({
  semestre: Number,
  anio: Number
});

module.exports = mongoose.model('Cuatrimestre', schema);
