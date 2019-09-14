const Sequelize = require("sequelize");
const sequelize = require("../db/index");
class Privilege extends Sequelize.Model {}
Privilege.init(
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "privileges" }
);

module.exports = Privilege;
