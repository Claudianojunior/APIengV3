const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema(
    {
      Cod_jogo: String,
      nome: String
    }
  );

module.exports = mongoose.model('Categoria', CategoriaSchema);