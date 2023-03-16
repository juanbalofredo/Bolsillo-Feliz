import Users from "../models/users.js";
import { Usuarios } from "../prueba(4).js";

export default async function createUser(userFromBody) {
    // console.log("esto es hasgoogle",hashgoogle)
    let creatingUser;
    let verifyUsers = await Users.findAll()
    if (verifyUsers.length === 0) {
        creatingUser = await Users.bulkCreate(Usuarios);
        return creatingUser;
    }
    let { hashgoogle, name, last_name, avatar, email, password, type_account, notifications, activity } = userFromBody;
    if (!last_name) {
        const fullName = name.split(" ");
        creatingUser = await Users.create({
            name: fullName[0],
            last_name: fullName[1],
            avatar,
            email,
            password,
            type_account,
            notifications,
            activity,
            hashgoogle
        })
    } else {
        creatingUser = await Users.create({
            name,
            last_name,
            avatar,
            email,
            password,
            type_account,
            notifications,
            activity,
            hashgoogle
        })
    }
    return creatingUser;
}