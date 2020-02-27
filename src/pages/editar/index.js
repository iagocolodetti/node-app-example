function index(contato) {
    return (`
        <!DOCTYPE html>
        <html lang="pt">
            <head>
                <meta charset="utf-8">
                <title>Node App Example</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                <link href="editar/styles.css" rel="stylesheet" type="text/css"/>
            </head>
            <body>
                <div class="container-fluid center">
                    <div class="form-group justify-content-center text-center">
                        <nav class="navbar navbar-expand py-0">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/adicionar">Adicionar</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Listar</a>
                                </li>
                            </ul>
                        </nav>
                        <h3>Editar Contato</h3>
                        <div class="form-row mb-4 justify-content-center">
                            <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 disabled-input-wrap">
                                <input type="text" class="form-control" id="nome-atual" name="nome-atual" value="${contato.nome}" disabled />
                                <span class="floating-label">Nome Atual</span>
                            </div>
                        </div>
                        <div class="form-row mb-4 justify-content-center">
                            <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 disabled-input-wrap">
                                <input type="text" class="form-control" id="telefone-atual" name="telefone-atual" value="${contato.telefone}" disabled />
                                <span class="floating-label">Telefone Atual</span>
                            </div>
                        </div>
                        <div class="form-row mb-4 justify-content-center">
                            <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 disabled-input-wrap">
                                <input type="email" class="form-control" id="email-atual" name="email-atual" value="${contato.email}" disabled />
                                <span class="floating-label">Email Atual</span>
                            </div>
                        </div>
                        <hr />
                        <form action="/editar" method="POST">
                            <div class="form-row mb-4 justify-content-center" hidden>
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="id" name="id" value="${contato.id}" required />
                                    <span class="floating-label">ID</span>
                                </div>
                            </div>
                            <div class="form-row mb-4 justify-content-center">
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="nome" name="nome" required />
                                    <span class="floating-label">Novo Nome</span>
                                </div>
                            </div>
                            <div class="form-row mb-4 justify-content-center">
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="telefone" name="telefone" required />
                                    <span class="floating-label">Novo Telefone</span>
                                </div>
                            </div>
                            <div class="form-row mb-4 justify-content-center">
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="email" name="email" required />
                                    <span class="floating-label">Novo Email</span>
                                </div>
                            </div>
                            <div class="form-row mb-4 justify-content-center">
                                <input type="submit" class="btn btn-success btn-fix" value="Atualizar" />
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </html>
    `);
}

module.exports = index;
