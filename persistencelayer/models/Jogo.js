const mongoose = require('mongoose');

const JogoSchema = new mongoose.Schema(
    {
      Cod_vendedor: String,
      Cod_jogo: String,
      nome: String,
      categoria: String,
      preco: String,
      nota: String,
      descricao: String
    }
);

module.exports = mongoose.model('Jogo', JogoSchema);