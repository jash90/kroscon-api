const Sequelize = require("sequelize");
const sequelize = require("../db/index");
const Privilege = require('./privilege');
class User extends Sequelize.Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
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
      allowNull: true
    },
    token: Sequelize.STRING,
    tokenExpired: Sequelize.DATE,
    privilegeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: "privilege",
        key: "id"
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
  },
  { sequelize, modelName: "user" }
);

Privilege.hasMany(User);
User.belongsTo(Privilege, { foreignKey: 'privilegeId' });
module.exports = User;
