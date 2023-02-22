import { Sequelize } from "sequelize";

const db = new Sequelize("dans_ojt", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
