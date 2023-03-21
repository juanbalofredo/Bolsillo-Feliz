import { DataTypes } from 'sequelize';
import dataBase from "../config/db.js";
import Products from "./products.js";

const Prices = dataBase.define(
    "prices",
    {
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    },
    {
        timestamps: false,
        // indexes: [
        //     {
        //         unique: true,
        //         fields: ['productId', 'superMId']
        //     }
        // ]
    }
);

export default Prices;




// uniqueKeys: {
//     unique: true,
//     fields: ['ProductId', 'SmarketId']
// }