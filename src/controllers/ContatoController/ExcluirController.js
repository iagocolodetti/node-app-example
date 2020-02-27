const listar = require('../../pages/listar');
const divAlert = require('../../components/divAlert');
const Contato = require('../../models/Contato');

module.exports = {
    async onPost(request, response) {
        let contatos = [];
        const { id } = JSON.parse(request.body.contato);
        try {
            contatos = await Contato.findAll({ raw: true });
            const contato = await Contato.findOne({ where: { id } });
            if (contato) {
                await contato.destroy();
                contatos = contatos.filter(_contato => _contato.id !== id);
                response.send(listar(contatos, divAlert('Contato excluído com sucesso.', 'alert-success')));
            } else {
                response.send(listar(contatos, divAlert('Erro: Contado não encontrado.', 'alert-danger')));
            }
        } catch (error) {
            response.send(listar(contatos, divAlert('Erro: Não foi possível excluir o contato.', 'alert-danger')));
        }
    }
}
