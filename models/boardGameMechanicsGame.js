const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const MechanicsGame = require('./mechanicsGame');
const BoardGame = require('./boardGame');
class BoardGamesMechanicsGame extends Sequelize.Model { }
BoardGamesMechanicsGame.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mechanicsGameId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'mechanicsGame',
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

    }, {sequelize, modelName: 'boardGamesMechanicsGame' });

BoardGame.hasMany(BoardGamesMechanicsGame);
BoardGamesMechanicsGame.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
MechanicsGame.hasMany(BoardGamesMechanicsGame);
BoardGamesMechanicsGame.belongsTo(MechanicsGame, { foreignKey: 'mechanicsGameId' });
module.exports = BoardGamesMechanicsGame;