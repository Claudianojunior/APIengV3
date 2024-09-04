const mongoose = require('mongoose');

const ICategoriaDAO = require('./ICategoriaDAO.js');

const Categoria = require('../models/Categoria');


class CategoriaDAO_Mongoose extends ICategoriaDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://engsoftifb:engs0ft!@engsoft.gzjzg.mongodb.net/?retryWrites=true&w=majority&appName=engsoft',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const categoria =  await Categoria.create(req.body);
          return categoria;
     }  
     async recovery(){ 
          let categorias = await Categoria.find();
          return categorias; 
         }
     async update(req){
       let categoria = await Categoria.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return categoria;

     }
     async delete(req){
        let categoria = await Categoria.findByIdAndRemove(req.params.id);
        return categoria; 
     } 

     async search(req){
        let categorias = await Categoria.find(
          { nome : req.query.nome}
                                   ); 
       return categorias;

     } 


}
module.exports = CategoriaDAO_Mongoose;