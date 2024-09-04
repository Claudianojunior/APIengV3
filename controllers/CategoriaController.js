const ICategoriaController = require('./ICategoriaController');


const config = require('../config.js');
const CategoriaDAO = require('../persistencelayer/dao/'+config.ICategoriaDAO);
let categoriadao = new CategoriaDAO();

class CategoriaController extends ICategoriaController{
  constructor(){
    super();

  }


  async show(req, res)
    {

       let categorias = await categoriadao.recovery();
        return res.json(categorias);
    }
  async store(req, res)
     {
        const categoria =  await categoriadao.create(req);
        return res.json(categoria);
     }
   async destroy(req,res){
         let categoria = await categoriadao.delete(req);
         return res.json(categoria);
    }
   async update(req,res){
        let categoria = await categoriadao.update(req);
        return res.json(categoria);
    }

   async index(req,res)
    {
        let categorias = await categoriadao.search(req);
        return res.json(categorias);
    }

}
module.exports = CategoriaController;