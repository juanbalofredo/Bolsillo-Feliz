import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

const {DB_DEPLOY} = process.env

const dataBase = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});



// const dataBase = new Sequelize(
//    process.env.DB_NAME || "products",
//    process.env.DB_USER,
//    process.env.DB_PASSWORD,
//    {
//      host:process.env.DB_HOST,
//      dialect:process.env.DB_DIALICT || "postgres",
//      port: process.env.DB_PORT || 5432,
//      logging: false,
//    }
// )

export default dataBase;