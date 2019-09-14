const Sequelize = require("sequelize");
const sequelize = require("../db/index");
const Publisher = require("./publisher");
class BoardGame extends Sequelize.Model {}
BoardGame.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    uuid: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true },
      unique: true
    },
    minPlayers: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: 1 }
    },
    maxPlayers: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: 2 }
    },
    playingTime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: 1 }
    },
    minAge: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: 1 }
    },
    publisherId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
      references: {
        model: Publisher,
        key: "id"
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "boardGames", }
);

Publisher.hasMany(BoardGame);
BoardGame.belongsTo(Publisher, { foreignKey: "publisherId" });
module.exports = BoardGame;
