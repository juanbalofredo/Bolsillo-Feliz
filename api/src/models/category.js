import { DataTypes } from 'sequelize';
import dataBase from "../config/db.js";
import Product from "./product.js";

 const Category = dataBase.define(
    "category",
    {
		id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: true
        }
	},
	{sequelize, timestamps: false});


Category.belongsToMany(Product, {
    through: "Category_Products",
    timestamps: false
});
Product.hasOne(Category,{
    through: "Category_Products",
    timestamps: false
});

export default Category;