var mongoose = require('mongoose');

var schema = mongoose.Schema({
  materia: {
    type: Schema.ObjectId,
    ref: 'Materia'
  },
  horarios: [{
    type: Schema.ObjectId,
    ref: 'Horario'
  }],
  cuatrimestre: {
      type: Schema.ObjectId,
      ref: 'Cuatrimestre'
  }
});

module.exports = mongoose.model('Curso', schema);
