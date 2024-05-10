const Sequelize = require('sequelize');
const db = new Sequelize('smpp_new', 'root', 'yU-(5!q<tE!D', {
    host: '192.168.43.248',
    port:    '3306',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false

});
module.exports = db;