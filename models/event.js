const Sequelize = require("sequelize");
const sequelize = require("../db/index");
class Event extends Sequelize.Model {}

Event.init(
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
    start: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: { notEmpty: true }
    },
    end: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: { notEmpty: true }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "event" }
);

Lecture.hasMany(Event);
Event.belongsTo(Lecture, { foreignKey: 'eventId' });
module.exports = Event;
