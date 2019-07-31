const Sequelize = require('sequelize');
const db = require('../db/db.json');
const sequelize = new Sequelize(db.dbname, db.user, db.pass, {
    host: db.host,
    port:db.port,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;