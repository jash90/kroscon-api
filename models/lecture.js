const Sequelize = require("sequelize");
const sequelize = require("../db/index");
class Lecture extends Sequelize.Model {}

Lecture.init(
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
    eventId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'event',
            key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "lectures" }
);

module.exports = Lecture;
