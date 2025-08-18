const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config

const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT
} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: true,
});

module.exports = sequelize;
