function index(mensagem = '') {
    return (`
        <!DOCTYPE html>
        <html lang="pt">
            <head>
                <meta charset="utf-8">
                <title>Node App Example</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                <link href="adicionar/styles.css" rel="stylesheet" type="text/css"/>
            </head>
            <body>
                <div class="container-fluid center">
                    <div class="form-group justify-content-center text-center">
                        <nav class="navbar navbar-expand py-0">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Listar</a>
                                </li>
                            </ul>
                        </nav>
                        <h3>Adicionar Contato</h3>
                        <form action="/adicionar" method="POST">
                            <div class="form-row mb-4 justify-content-center">
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="nome" name="nome" required />
                                    <span class="floating-label">Nome</span>
                                </div>
                            </div>
                            <div class="form-row mb-4 justify-content-center">
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="telefone" name="telefone" required />
                                    <span class="floating-label">Telefone</span>
                                </div>
                            </div>
                            <div class="form-row mb-4 justify-content-center">
                                <div class="col-xs-12 col-sm-11 col-md-4 col-lg-4 input-wrap">
                                    <input type="text" class="form-control" id="email" name="email" required />
                                    <span class="floating-label">Email</span>
                                </div>
                            </div>
                            ${mensagem}
                            <div class="form-row mb-4 justify-content-center">
                                <input type="submit" class="btn btn-success btn-fix" value="Adicionar" />
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </html>
    `);
}

module.exports = index;
