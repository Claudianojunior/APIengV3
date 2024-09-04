const mongoose = require('mongoose');

const VendedorSchema = new mongoose.Schema(
    {
      Cod_vendedor: String,
      CPF: String,
      nome: String,
      email: String,
      password: String
    }
);

module.exports = mongoose.model('Vendedor', VendedorSchema);