const path = require('path');
const adicionar = require('../../pages/adicionar');
const divAlert = require('../../components/divAlert');
const Contato = require('../../models/Contato');

module.exports = {
    onGet(request, response) {
        response.send(adicionar());
    },

    async onPost(request, response) {
        try {
            await Contato.create(request.body);
            response.send(adicionar(divAlert('Contato adicionado com sucesso.', 'alert-success')));
        } catch (error) {
            response.send(adicionar(divAlert('Erro: Não foi possível adicionar o contato.', 'alert-danger')));
        }
    },

    sendStyle(request, response) {
        response.sendFile(path.join(__dirname, '../../pages/adicionar/styles.css'));
    }
}
