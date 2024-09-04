const mongoose = require('mongoose');

const IVendedorDAO = require('./IVendedorDAO');

const Vendedor = require('../models/Vendedor');


class VendedorDAO_Mongoose extends IVendedorDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://engsoftifb:engs0ft!@engsoft.gzjzg.mongodb.net/?retryWrites=true&w=majority&appName=engsoft',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const vendedor =  await Vendedor.create(req.body);
          return vendedor;
     }  
     async recovery(){ 
          let vendedors = await Vendedor.find();
          return vendedors; 
         }
     async update(req){
       let vendedor = await Vendedor.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return vendedor;

     }
     async delete(req){
        let vendedor = await Vendedor.findByIdAndRemove(req.params.id);
        return vendedor; 
     } 

     async search(req){
        let vendedors = await Vendedor.find(
          { email : req.query.email}
                                   ); 
       return vendedors;

     } 


}
module.exports = VendedorDAO_Mongoose;