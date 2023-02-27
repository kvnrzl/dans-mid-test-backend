const { DataTypes, Sequelize } = require("sequelize");
const db = require("../config/database");

const sequelize = new Sequelize("dans-mid-test-revisi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const user = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
  }
);

module.exports = user;
