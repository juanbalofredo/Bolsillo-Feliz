import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

// const dataBase = new Sequelize(${DB_DIALICT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

// const dataBase = new Sequelize(
//   process.env.DB_NAME || "products",
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALICT || "postgres",
//     port: process.env.DB_PORT || 5432,
//     logging: false,
//   }
// )

const dataBase = new Sequelize(process.env.DB_DEPLOY, {
  logging: false,
  native: false,
});

export default dataBase;
