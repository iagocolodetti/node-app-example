function index(contatos, mensagem = '') {
    function carregarTabela() {
        if (contatos && contatos.length > 0) {
            let rows = `<form id="editar" action="/editar" method="GET"></form>
                        <form id="excluir" action="/excluir" method="POST"></form>`;
            contatos.forEach(contato => {
                rows += (`
                    <tr>
                        <td>${contato.nome}</td>
                        <td>${contato.telefone}</td>
                        <td>${contato.email}</td>
                        <td>
                            <button type="submit" class="btn btn-primary" style="height: 1.5em;" form="editar" id="contato" name="contato" value=${encodeURIComponent(JSON.stringify(contato))}>
                                <span style="position: relative; bottom: 8px">Editar</span>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger" style="height: 1.5em;" form="excluir" id="contato" name="contato" value=${JSON.stringify(contato)}>
                                <span style="position: relative; bottom: 8px">Excluir</span>
                            </button>
                        </td>
                    </tr>
                `);
            });

            return (`
                <div class="table-responsive">
                    <table id="tabelaContato" class="table table-bordered table-sm mx-auto w-auto">
                        <thead>
                            <tr>
                                <th onClick="sortTable(0)">Nome</th>
                                <th onClick="sortTable(1)">Telefone</th>
                                <th onClick="sortTable(2)">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            `);
        } else {
            return '';
        }
    }

    return (`
        <!DOCTYPE html>
        <html lang="pt">
            <head>
                <meta charset="utf-8">
                <title>Node App Example</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                <script src="app.js" type="text/javascript"></script>
                <link href="styles.css" rel="stylesheet" type="text/css"/>
            </head>
            <body>
                <div class="container-fluid center">
                    <div class="form-group justify-content-center text-center">
                        <nav class="navbar navbar-expand py-0">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/adicionar">Adicionar</a>
                                </li>
                            </ul>
                        </nav>
                        <h3>Contatos</h3>
                        <form id="atualizar" action="/" method="GET"></form>
                        ${carregarTabela()}
                        ${mensagem}
                        <div class="form-row mb-4 justify-content-center">
                            <input type="submit" form="atualizar" class="btn btn-success btn-fix" value="Atualizar" />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
}

module.exports = index;
