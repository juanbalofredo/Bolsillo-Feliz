import { DataTypes } from 'sequelize';
import dataBase from "../config/db.js";

const Membership = dataBase.define(
    "membership",
    {
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    },
    {
        timestamps: false,
    }
);

export default Membership;