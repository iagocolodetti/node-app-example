const { Router } = require('express');
const ListarController = require('./controllers/ContatoController/ListarController');
const AdicionarController = require('./controllers/ContatoController/AdicionarController');
const EditarController = require('./controllers/ContatoController/EditarController');
const ExcluirController = require('./controllers/ContatoController/ExcluirController');

const routes = Router();

routes.get('/', ListarController.onGet);
routes.get('/styles.css', ListarController.sendStyle);
routes.get('/app.js', ListarController.sendApp);

routes.get('/adicionar', AdicionarController.onGet);
routes.post('/adicionar', AdicionarController.onPost);
routes.get('/adicionar/styles.css', AdicionarController.sendStyle);

routes.get('/editar', EditarController.onGet);
routes.post('/editar', EditarController.onPost);
routes.get('/editar/styles.css', EditarController.sendStyle);

routes.post('/excluir', ExcluirController.onPost);

module.exports = routes;
