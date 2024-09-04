const IVendedorController = require('./IVendedorController');


const config = require('../config.js');
const VendedorDAO = require('../persistencelayer/dao/'+config.IVendedorDAO);
let vendedordao = new VendedorDAO();

class VendedorController extends IVendedorController{
  constructor(){
    super();

  }


  async show(req, res)
    {

       let vendedors = await vendedordao.recovery();
        return res.json(vendedors);
    }
  async store(req, res)
     {
        const vendedor =  await vendedordao.create(req);
        return res.json(vendedor);
     }
   async destroy(req,res){
         let vendedor = await vendedordao.delete(req);
         return res.json(vendedor);
    }
   async update(req,res){
        let vendedor = await vendedordao.update(req);
        return res.json(vendedor);
    }

   async index(req,res)
    {
        let vendedors = await vendedordao.search(req);
        return res.json(vendedors);
    }

}
module.exports = VendedorController;