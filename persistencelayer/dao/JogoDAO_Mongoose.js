const mongoose = require('mongoose');

const IJogoDAO = require('./IJogoDAO.js');

const Jogo = require('../models/Jogo');


class JogoDAO_Mongoose extends IJogoDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://engsoftifb:engs0ft!@engsoft.gzjzg.mongodb.net/?retryWrites=true&w=majority&appName=engsoft',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const jogo =  await Jogo.create(req.body);
          return jogo;
     }  
     async recovery(){ 
          let jogos = await Jogo.find();
          return jogos; 
         }
     async update(req){
       let jogo = await Jogo.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return jogo;

     }
     async delete(req){
        let jogo = await Jogo.findByIdAndRemove(req.params.id);
        return jogo; 
     } 

     async search(req){
        let jogos = await Jogo.find(
          { nome : req.query.nome}
                                   ); 
       return jogos;

     } 


}
module.exports = JogoDAO_Mongoose;