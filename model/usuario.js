var mongoose = require('mongoose');

var schema = mongoose.Schema({
  nombre: String,
  password: String,
  cursos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Curso'
  }]
});

module.exports = mongoose.model('Usuario', schema);
