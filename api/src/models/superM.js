import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Prices from "./price.js";
// import Products from "./products.js";
import Users from "./users.js";


const SuperM = dataBase.define(
  "superM",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubications: {
      type: DataTypes.JSON,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    activity: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },

  { timestamps: false }
);

SuperM.hasMany(Prices);
Prices.belongsTo(SuperM);

SuperM.hasOne(Users);
Users.belongsTo(SuperM);
// SuperM.belongsToMany(Products, {
//     through: "SuperM_Products",
//     timestamps: false
// });

export default SuperM;
