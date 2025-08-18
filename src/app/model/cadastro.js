// CNH CPF CNPJ COMPROVANTES
const { DataTypes } = require('sequelize')
const database = require('../config/database')

const Empresa = database.define('credenciais', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    socio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    cnh: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rg: {
        type: DataTypes. INTEGER,
        allowNull: false
    },
    estadoCivil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profissao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    filiacao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'empresary_table',
    timestamp: true,
})

module.exports = Empresa;
