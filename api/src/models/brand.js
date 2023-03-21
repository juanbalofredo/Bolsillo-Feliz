import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
//import
const Brand = dataBase.define('brandTable', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { timestamps: false })

export default Brand;