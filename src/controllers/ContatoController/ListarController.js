const path = require('path');
const listar = require('../../pages/listar');
const divAlert = require('../../components/divAlert');
const Contato = require('../../models/Contato');

module.exports = {
    async onGet(request, response) {
        try {
            const result = await Contato.findAll({ raw: true });
            response.send(listar(result));
        } catch (error) {
            response.send(listar([], divAlert('Erro: Não foi possível buscar os contatos', 'alert-danger')));
        }
    },

    sendStyle(request, response) {
        response.sendFile(path.join(__dirname, '../../pages/listar/styles.css'));
    },

    sendApp(request, response) {
        response.sendFile(path.join(__dirname, '../../pages/listar/app.js'));
    }
}
