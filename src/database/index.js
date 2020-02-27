const { Sequelize } = require('sequelize');
const dbConfig = require('../configs/database');
const Contato = require('../models/Contato');

module.exports = {
    async connect() {
        sequelize = new Sequelize(dbConfig);
        try {
            await sequelize.authenticate();
            Contato.init(sequelize);
            console.log(`Conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}' estabelecida`);
        } catch (error) {
            console.error(`Não foi possível estabelecer a conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}'`);
        }
    }
}
