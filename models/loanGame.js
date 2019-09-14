const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const User = require('./user');
const BoardGame = require('./boardGame');
class LoanGame extends Sequelize.Model { }
LoanGame.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
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
            onDelete: 'NO ACTION',
            onUpdate: 'cascade',
        },
        hireUserId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        tableId :{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'table',
                key: 'id'
            },
        },
        startLoan: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: { isDate: true },
        },
        endLoan: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE

    }, {sequelize, modelName: 'loanGames' });

User.hasMany(LoanGame);
LoanGame.belongsTo(User, { foreignKey: 'userId' });
BoardGame.hasMany(LoanGame);
LoanGame.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
User.hasMany(LoanGame);
LoanGame.belongsTo(User, { foreignKey: 'hireUserId' });
module.exports = LoanGame;
