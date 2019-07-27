const Sequelize = require('sequelize');
const sequelize = require('../db/index');
class TypeGames extends Sequelize.Model { }
TypeGames.init(
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
    }, { sequelize, modelName: 'typeGame' });

module.exports = TypeGames;