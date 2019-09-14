const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const Mechanic = require('./mechanic');
const BoardGame = require('./boardGame');
class BoardGameMechanic extends Sequelize.Model { }
BoardGameMechanic.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mechanicId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'mechanic',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        boardGameId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'boardGame',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE

    }, {sequelize, modelName: 'boardGameMechanics' });

BoardGame.hasMany(BoardGameMechanic);
BoardGameMechanic.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
Mechanic.hasMany(BoardGameMechanic);
BoardGameMechanic.belongsTo(Mechanic, { foreignKey: 'mechanicId' });
module.exports = BoardGameMechanic;