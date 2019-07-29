const Sequelize = require("sequelize");
const sequelize = require("../db/index");
class User extends Sequelize.Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    token:Sequelize.STRING,
    tokenExpired: Sequelize.DATE,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
