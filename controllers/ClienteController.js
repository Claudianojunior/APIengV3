const IClienteController = require('./IClienteController');


const config = require('../config.js');
const ClienteDAO = require('../persistencelayer/dao/'+config.IClienteDAO);
let clientedao = new ClienteDAO();

class ClienteController extends IClienteController{
  constructor(){
    super();

  }


  async show(req, res)
    {

       let clientes = await clientedao.recovery();
        return res.json(clientes);
    }
  async store(req, res)
     {
        const cliente =  await clientedao.create(req);
        return res.json(cliente);
     }
   async destroy(req,res){
         let cliente = await clientedao.delete(req);
         return res.json(cliente);
    }
   async update(req,res){
        let cliente = await clientedao.update(req);
        return res.json(cliente);
    }

   async index(req,res)
    {
        let clientes = await clientedao.search(req);
        return res.json(clientes);
    }

}
module.exports = ClienteController;