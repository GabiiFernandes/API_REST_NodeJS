const Sequelize = require('sequelize');
const db = require('./db');

const Animais = db.define('Animais', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Idade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Raca: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Observacao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    NomeDono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar a tabela no BD
//Animais.sync();


//Primeiro apaga a TB, em seguida cria TB
//Animais.sync({ force: true })

module.exports = Animais;