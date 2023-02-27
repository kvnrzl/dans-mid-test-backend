const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dans-mid-test-revisi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.export = sequelize;
