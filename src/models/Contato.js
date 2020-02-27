const { Model, DataTypes } = require('sequelize');

class Contato extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                required: true
            },
            telefone: {
                type: DataTypes.STRING,
                required: true
            },
            email: {
                type: DataTypes.STRING,
                required: true
            }
        }, {
            tableName: 'contato',
            timestamps: false,
            sequelize
        });
    }
}

module.exports = Contato;
