const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let UserController = require('../controllers/'+config.IUserController);

let userController = new UserController();

let ClienteController = require('../controllers/'+config.IClienteController);

let clienteController = new ClienteController();

let AdminController = require('../controllers/'+config.IAdminController);

let adminController = new AdminController();

let VendedorController = require('../controllers/'+config.IVendedorController);

let vendedorController = new VendedorController();

let CategoriaController = require('../controllers/'+config.ICategoriaController);

let categoriaController = new CategoriaController();

let PedidoController = require('../controllers/'+config.IPedidoController);

let pedidoController = new PedidoController();

let JogoController = require('../controllers/'+config.IJogoController);

let jogoController = new JogoController();

class UserRoutes extends IRoutes{

  constructor() {   
    super();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  
} // finaliza construtor

  get(){
      app.get('/', (req, res) => {
      res.send('Rest API com Polimorfismo');
      });
      app.get('/user', userController.show);

      app.get('/user/search', userController.index);

      app.get('/cliente', clienteController.show);

      app.get('/cliente/search', clienteController.index);

      app.get('/admin', adminController.show);

      app.get('/admin/search', adminController.index);

      app.get('/vendedor', vendedorController.show);

      app.get('/vendedor/search', vendedorController.index);

      app.get('/categoria', categoriaController.show);

      app.get('/categoria/search', categoriaController.index);

      app.get('/pedido', pedidoController.show);

      app.get('/pedido/search', pedidoController.index);

      app.get('/jogo', jogoController.show);

      app.get('/jogo/search', jogoController.index);
// lista user, filtrando por email
// ex: /user/search/?email=vaguetti@gmail.com
//=========================
  }
  post(){
    app.post('/user', userController.store);
// lista user
    app.post('/cliente', clienteController.store);

    app.post('/admin', adminController.store);

    app.post('/vendedor', vendedorController.store);

    app.post('/categoria', categoriaController.store);

    app.post('/pedido', pedidoController.store);

    app.post('/jogo', jogoController.store);
  }

  delete(){
    app.delete('/cliente', clienteController.destroy);

    app.delete('/admin', adminController.destroy);

    app.delete('/vendedor', vendedorController.destroy);

    app.delete('/categoria', categoriaController.destroy);

    app.delete('/pedido', pedidoController.destroy);

    app.delete('/jogo', jogoController.destroy);
  }

  put(){
    app.put('/cliente', clienteController.update);

    app.put('/admin', adminController.update);

    app.put('/vendedor', vendedorController.update);

    app.put('/categoria', categoriaController.update);

    app.put('/pedido', pedidoController.update);

    app.put('/jogo', jogoController.update);
  
  }

  
  listen(){
    app.listen(3000, () => console.log('server started'));
     }

}
module.exports = UserRoutes;
