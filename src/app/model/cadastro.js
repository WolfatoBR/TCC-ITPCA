// CNH CPF CNPJ COMPROVANTES
const { DataTypes } = require('sequelize')
const database = require('../config/database')

const Empresa = database.define('credenciais', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passworld: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'login_table',
    timestamp: true,
})

module.exports = Empresa;
