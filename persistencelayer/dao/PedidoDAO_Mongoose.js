const mongoose = require('mongoose');

const IPedidoDAO = require('./IPedidoDAO.js');

const Pedido = require('../models/Pedido');


class PedidoDAO_Mongoose extends IPedidoDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://engsoftifb:engs0ft!@engsoft.gzjzg.mongodb.net/?retryWrites=true&w=majority&appName=engsoft',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const pedido =  await Pedido.create(req.body);
          return pedido;
     }  
     async recovery(){ 
          let pedidos = await Pedido.find();
          return pedidos; 
         }
     async update(req){
       let pedido = await Pedido.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return pedido;

     }
     async delete(req){
        let pedido = await Pedido.findByIdAndRemove(req.params.id);
        return pedido; 
     } 

     async search(req){
        let pedidos = await Pedido.find(
          { id : req.query.id}
                                   ); 
       return pedidos;

     } 


}
module.exports = PedidoDAO_Mongoose;