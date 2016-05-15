var mongoose = require('mongoose');

var schema = mongoose.Schema({
  nombre: String,
  password: String
});

module.exports = mongoose.model('Usuario', schema);
