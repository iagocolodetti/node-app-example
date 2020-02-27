const path = require('path');
const editar = require('../../pages/editar');
const listar = require('../../pages/listar');
const divAlert = require('../../components/divAlert');
const Contato = require('../../models/Contato');

module.exports = {
    onGet(request, response) {
        response.send(editar(JSON.parse(decodeURIComponent(request.query.contato))));
    },

    async onPost(request, response) {
        let contatos = [];
        const { id } = request.body;
        try {
            contatos = await Contato.findAll({ raw: true });
            const contato = await Contato.findOne({ where: { id } });
            if (contato) {
                await contato.update(request.body);
                const index = contatos.findIndex(_contato => _contato.id == id);
                contatos[index] = contato.get({ plain: true });
                response.send(listar(contatos, divAlert('Contato atualizado com sucesso.', 'alert-success')));
            } else {
                response.send(listar(contatos, divAlert('Erro: Contado não encontrado.', 'alert-danger')));
            }
        } catch (error) {
            response.send(listar(contatos, divAlert('Erro: Não foi possível atualizar o contato.', 'alert-danger')));
        }
    },

    sendStyle(request, response) {
        response.sendFile(path.join(__dirname, '../../pages/editar/styles.css'));
    }
}
