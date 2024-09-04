const IPedidoController = require('./IPedidoController');


const config = require('../config.js');
const PedidoDAO = require('../persistencelayer/dao/'+config.IPedidoDAO);
let pedidodao = new PedidoDAO();

class PedidoController extends IPedidoController{
  constructor(){
    super();

  }


  async show(req, res)
    {

       let pedidos = await pedidodao.recovery();
        return res.json(pedidos);
    }
  async store(req, res)
     {
        const pedido =  await pedidodao.create(req);
        return res.json(pedido);
     }
   async destroy(req,res){
         let pedido = await pedidodao.delete(req);
         return res.json(pedido);
    }
   async update(req,res){
        let pedido = await pedidodao.update(req);
        return res.json(pedido);
    }

   async index(req,res)
    {
        let pedidos = await pedidodao.search(req);
        return res.json(pedidos);
    }

}
module.exports = PedidoController;