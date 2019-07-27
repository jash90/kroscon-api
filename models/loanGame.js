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
                model: 'users',
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

    }, {sequelize, modelName: 'loanGame' });

User.hasMany(LoanGame);
LoanGame.belongsTo(User, { foreignKey: 'userId' });
BoardGame.hasMany(LoanGame);
LoanGame.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
module.exports = LoanGame;
