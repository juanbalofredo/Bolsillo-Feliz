import Reviews from "../models/review.js";
import Users from "../models/users.js";
import createUser from "./createUser.helper.js";
import bcrypt from "bcrypt";

export function getUserById(id) {
    const userById = Users.findOne({
        where: { id },
        include: [Reviews]
    });
    return userById;
}

export async function getUserByEmail(comparing) {
    const { email, password } = comparing;
    let userByEmail = await Users.findOne({
        where: {
            email
        }
    }); 
    console.log("esto es userByEmail =>",userByEmail)
    let passwordMatch = await bcrypt.compare(password, userByEmail.password)
    if( passwordMatch ) {
        return userByEmail;
    } else {
        throw Error ("Incorrect password")
    }

};
export async function getUserSoloByEmail(comparing) {
    let { email } = comparing
    let userByEmail;
    let emailDataBase = await Users.findOne({ where: { email } })
    if (emailDataBase=== null) {
        userByEmail = await createUser(comparing)
        return userByEmail;
    } else {
        const { email, hashgoogle } = comparing;
        userByEmail = Users.findOne({
            where: {
                email,
                hashgoogle
            }
        });
        return userByEmail;
    }
};

// if (email && !password) {
//     let userByEmail = Users.findOne({
//         where: {
//             email
//         }
//     });
//     return userByEmail;
// }

export function deleteUserById(id) {
    const userDelete = Users.destroy({ where: { id } })
    return userDelete;
};

export async function updateUserByTypeAccount({ activity, email, name, last_name, password, avatar, type_account, notifications, id, type_account_logged }) {
    if (type_account_logged === "3") {
        let datas = { activity, email, name, last_name, password, avatar, type_account, notifications }
        const dataForChange = {}

        for (let key in datas) {
            if (datas[key] !== undefined) {
                dataForChange[key] = datas[key]
            }
        }
        let updatedAdmin = await Users.update(
            dataForChange,
            { where: { id } }
        )
        return updatedAdmin;
    } else {
        let datas = { email, name, last_name, password, avatar, notifications }
        let dataForChange = {}
        for (let key in datas) {
            if (datas[key] !== undefined) {
                dataForChange[key] = datas[key]
            }
        }
        let updatedUser = await Users.update(
            dataForChange,
            { where: { id } }
        )
        console.log(updatedUser);
        return updatedUser;
    }
}


