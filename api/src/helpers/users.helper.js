import Reviews from "../models/review.js";
import Users from "../models/users.js";
import createUser from "./createUser.helper.js";

export function getUserById(id) {
    const userById = Users.findOne({
        where: { id },
        include: [Reviews]
    });
    return userById;
}

export function getUserByEmail(comparing) {
    const { email, password } = comparing;
    let userByEmail = Users.findOne({
        where: {
            email,
            password
        }
    }); return userByEmail;

};
export async function getUserSoloByEmail(comparing) {
    let { email } = comparing
    let userByEmail;
    let emailDataBase = await Users.findOne({ where: { email } })
    if (!emailDataBase) {
        userByEmail = await createUser(comparing)

    } else {
        const { email, hashgoogle } = comparing;
        // console.log("esto es hashgoogle ==>",hashgoogle)
        userByEmail = Users.findOne({
            where: {
                email,
                hashgoogle
            }
        });
    }
    return userByEmail;
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

export function updateUserByTypeAccount({ activity, email, name, last_name, password, avatar, type_account, notifications, id, type_account_logged }) {
    console.log(type_account_logged, id, type_account)
    if (type_account_logged === "3") {
        let datas = { activity, email, name, last_name, password, avatar, type_account, notifications }
        const dataForChange = {}

        for (let key in datas) {
            if (datas[key] !== undefined) {
                dataForChange[key] = datas[key]
            }
        }
        let updatedAdmin = Users.update(
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
        let updatedUser = Users.update(
            dataForChange,
            { where: { id } }
        )
        return updatedUser;
    }
}


