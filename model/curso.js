var mongoose = require('mongoose');

var schema = mongoose.Schema({
  materia: {
    type: mongoose.Schema.ObjectId,
    ref: 'Materia'
  },
  horarios: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Horario'
  }],
  cuatrimestre: {
    type: mongoose.Schema.ObjectId,
    ref: 'Cuatrimestre'
  }
});

module.exports = mongoose.model('Curso', schema);
