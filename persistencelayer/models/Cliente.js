const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema(
    {
      Cod_cli: String,
      CPF: String,
      nome: String,
      email: String,
      password: String,
      Assinante: String
    }
);

module.exports = mongoose.model('Cliente_', ClienteSchema);