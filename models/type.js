const Sequelize = require('sequelize');
const sequelize = require('../db/index');
class Type extends Sequelize.Model { }
Type.init(
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
    }, { sequelize, modelName: 'type' });

module.exports = Type;