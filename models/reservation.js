const Sequelize = require("sequelize");
const sequelize = require("../db/index");
const User = require("./user");
const BoardGame = require("./boardGame");
const Table = require("./table");
class Reservation extends Sequelize.Model {}

Reservation.init(
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
    tableId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "table",
        key: "id"
      },
      onDelete: "NO ACTION",
      onUpdate: "cascade"
    },
    time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "reservations" }
);
User.hasMany(Reservation);
Reservation.belongsTo(User, { foreignKey: 'userId' });
BoardGame.hasMany(Reservation);
Reservation.belongsTo(BoardGame, { foreignKey: 'boardGameId' });
Table.hasMany(Reservation);
Reservation.belongsTo(Table, { foreignKey: 'tableId' });
module.exports = Reservation;
