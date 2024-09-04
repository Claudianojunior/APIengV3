const config = require('./config.js');
let IRoutes = require('./routes/'+config.IRoutes);
let userRoutes = new IRoutes();
    userRoutes.get();  // subir as rotas de get
    userRoutes.post();// subir as rotas de post
    userRoutes.delete();// subir as rotas de delete
    userRoutes.put();// subir as rotas de update
    userRoutes.listen(); // subir o backend
