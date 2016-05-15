var mongoose = require('mongoose');

var schema = mongoose.Schema({
  semestre: Number,
  anio: Number
});

mongoose.model('Cuatrimestre', schema);
