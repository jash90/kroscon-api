const Sequelize = require('sequelize');
const sequelize = require('../db/index');
class Mechanic extends Sequelize.Model { }
Mechanic.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE
    }, { sequelize, modelName: 'mechanic' });

module.exports = Mechanic;