import { Sequelize } from "sequelize";

const db = new Sequelize("dans-mid-test-backend", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
