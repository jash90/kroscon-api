const Sequelize = require("sequelize");
const sequelize = require("../db/index");
const User = require("./user");
const BoardGame = require("./boardGame");
const LoanGame = require("./loanGame");
class Feedback extends Sequelize.Model {}

Feedback.init(
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
        model: "user",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    },
    boardGameId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "boardGame",
        key: "id"
      },
      onDelete: "NO ACTION",
      onUpdate: "cascade"
    },
    loanGameId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "loanGame",
        key: "id"
      },
      onDelete: "NO ACTION",
      onUpdate: "cascade"
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "feedbacks" }
);
User.hasMany(Feedback);
Feedback.belongsTo(User, { foreignKey: 'userId' });
BoardGame.hasMany(Feedback);
Feedback.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
LoanGame.hasMany(Feedback);
Feedback.belongsTo(LoanGame, { foreignKey: 'loanGameId' });
module.exports = Feedback;
