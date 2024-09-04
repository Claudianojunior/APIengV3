const IAdminController = require('./IAdminController');


const config = require('../config.js');
const AdminDAO = require('../persistencelayer/dao/'+config.IAdminDAO);
let admindao = new AdminDAO();

class AdminController extends IAdminController{
  constructor(){
    super();

  }


  async show(req, res)
    {

       let admins = await admindao.recovery();
        return res.json(admins);
    }
  async store(req, res)
     {
        const admin =  await admindao.create(req);
        return res.json(admin);
     }
   async destroy(req,res){
         let admin = await admindao.delete(req);
         return res.json(admin);
    }
   async update(req,res){
        let admin = await admindao.update(req);
        return res.json(admin);
    }

   async index(req,res)
    {
        let admins = await admindao.search(req);
        return res.json(admins);
    }

}
module.exports = AdminController;