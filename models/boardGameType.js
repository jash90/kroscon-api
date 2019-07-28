const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const Type = require('./type');
const BoardGame = require('./boardGame');
class BoardGameType extends Sequelize.Model { }
BoardGameType.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'type',
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

    }, {sequelize, modelName: 'boardGameType' });

BoardGame.hasMany(BoardGameType);
BoardGameType.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
Type.hasMany(BoardGameType);
BoardGameType.belongsTo(Type, { foreignKey: 'typeId' });
module.exports = BoardGameType;