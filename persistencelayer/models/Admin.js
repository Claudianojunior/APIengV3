const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
    {
      Cod_admin: String,
      CPF: String,
      nome: String,
      email: String,
      password: String
    }
);

module.exports = mongoose.model('Admin', AdminSchema);