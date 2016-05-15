var mongoose = require('mongoose');

var schema = mongoose.Schema({
  this.materia: {
    type: Schema.ObjectId,
    ref: 'Materia'
  },
  this.horarios: [{
    type: Schema.ObjectId,
    ref: 'Horario'
  }],
  this.cuatrimestre: {
      type: Schema.ObjectId,
      ref: 'Cuatrimestre'
  }
});

mongoose.model('Curso', schema);
