const mongoose = require('mongoose');

const IAdminDAO = require('./IAdminDAO.js');

const Admin = require('../models/Admin');


class AdminDAO_Mongoose extends IAdminDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://engsoftifb:engs0ft!@engsoft.gzjzg.mongodb.net/?retryWrites=true&w=majority&appName=engsoft',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const admin =  await Admin.create(req.body);
          return admin;
     }  
     async recovery(){ 
          let admins = await Admin.find();
          return admins; 
         }
     async update(req){
       let admin = await Admin.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return admin;

     }
     async delete(req){
        let admin = await Admin.findByIdAndRemove(req.params.id);
        return admin; 
     } 

     async search(req){
        let admins = await Admin.find(
          { email : req.query.email}
                                   ); 
       return admins;

     } 


}
module.exports = AdminDAO_Mongoose;