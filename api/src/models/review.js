import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Users from "./users.js";
import SuperM from "./superM.js";

const Reviews = dataBase.define('reviews', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement:true
    // },
    message: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    activity: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    // agregar supermercado y puntaje
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[1, 2, 3, 4, 5]]
        }
    }
}, { timestamps: false })

Reviews.belongsTo(Users, {
    foreignKey: 'userId', // Especifica el nombre de la columna en la tabla posts
    as: 'user',
    timestamps: false
});
Users.hasMany(Reviews);

SuperM.hasMany(Reviews);
Reviews.belongsTo(SuperM);

// Reviews.belongsTo(SuperM, {
//     foreignKey: 'superMId',
//     timestamps: false
// });

export default Reviews;