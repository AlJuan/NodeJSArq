var mongoose = require('mongoose');

var schema = mongoose.Schema({
  materia: {
    type: mongoose.Schema.ObjectId,
    ref: 'Materia'
  },
  horario: String,
  nroDeCurso: Number,
  cuatrimestre: {
    type: mongoose.Schema.ObjectId,
    ref: 'Cuatrimestre'
  }
});

module.exports = mongoose.model('Curso', schema);
