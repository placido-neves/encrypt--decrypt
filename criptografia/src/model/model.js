const Sequelize = require('sequelize');

configDB = {
    dialect:"postgres",
    host:"db",
    port:5432,
    database:'crypto',
    username:'postgres',
    password:'postgres'
}

const sequelize = new Sequelize(configDB);

const encryptModel = sequelize.define('criptografia', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {encryptModel,sequelize}