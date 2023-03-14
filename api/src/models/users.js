import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Users = dataBase.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hashgoogle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_account: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
        defaultValue: "1"
    },
    notifications: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    activity: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, { timestamps: false })

export default Users;