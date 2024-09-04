const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema(
    {
      id : String,
      Cod_cli : String,
      Cod_jogo : String,
      Data : String,
      preco : String
    }
);

module.exports = mongoose.model('Pedido', PedidoSchema);