const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const TypeGame = require('./typeGame');
const BoardGame = require('./boardGame');
class BoardGamesTypeGame extends Sequelize.Model { }
BoardGamesTypeGame.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeGameId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'typeGame',
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

    }, {sequelize, modelName: 'boardGamesTypeGame' });

BoardGame.hasMany(BoardGamesTypeGame);
BoardGamesTypeGame.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
TypeGame.hasMany(BoardGamesTypeGame);
BoardGamesTypeGame.belongsTo(TypeGame, { foreignKey: 'typeGameId' });
module.exports = BoardGamesTypeGame;