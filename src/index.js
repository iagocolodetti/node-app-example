const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const routes = require('./routes');

db.connect();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(8080, () => {
    console.log('Aplicação rodando na porta \'8080\'');
});
