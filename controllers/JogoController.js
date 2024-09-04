const IJogoController = require('./IJogoController');


const config = require('../config.js');
const JogoDAO = require('../persistencelayer/dao/'+config.IJogoDAO);
let jogodao = new JogoDAO();

class JogoController extends IJogoController{
  constructor(){
    super();

  }


  async show(req, res)
    {

       let jogos = await jogodao.recovery();
        return res.json(jogos);
    }
  async store(req, res)
     {
        const jogo =  await jogodao.create(req);
        return res.json(jogo);
     }
   async destroy(req,res){
         let jogo = await jogodao.delete(req);
         return res.json(jogo);
    }
   async update(req,res){
        let jogo = await jogodao.update(req);
        return res.json(jogo);
    }

   async index(req,res)
    {
        let jogos = await jogodao.search(req);
        return res.json(jogos);
    }

}
module.exports = JogoController;