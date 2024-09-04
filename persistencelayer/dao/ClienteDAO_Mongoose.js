const mongoose = require('mongoose');

const IClienteDAO = require('./IClienteDAO.js');

const Cliente = require('../models/Cliente');


class ClienteDAO_Mongoose extends IClienteDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://engsoftifb:engs0ft!@engsoft.gzjzg.mongodb.net/?retryWrites=true&w=majority&appName=engsoft',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const cliente =  await Cliente.create(req.body);
          return cliente;
     }  
     async recovery(){ 
          let clientes = await Cliente.find();
          return clientes; 
         }
     async update(req){
       let cliente = await Cliente.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return cliente;

     }
     async delete(req){
        let cliente = await Cliente.findByIdAndRemove(req.params.id);
        return cliente; 
     } 

     async search(req){
        let clientes = await Cliente.find(
          { email : req.query.email}
                                   ); 
       return clientes;

     } 


}
module.exports = ClienteDAO_Mongoose;