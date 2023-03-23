import Reviews from "../models/review.js";
import Users from "../models/users.js";
import createUser from "./createUser.helper.js";
import bcrypt from "bcrypt";
import SuperM from "../models/superM.js";

export function getUserById(id) {
  const userById = Users.findOne({
    where: { id },
    include: [Reviews],
  });
  return userById;
}

export async function getUserByEmail(comparing) {
  const { email, password } = comparing;
  let userByEmail = await Users.findOne({
    where: {
      email,
    },
  });

  let passwordMatch = await bcrypt.compare(password, userByEmail.password);

  if (passwordMatch) {
    return userByEmail;
  } else {
    throw Error("Incorrect password");
  }
}
export async function getUserSoloByEmail(comparing) {
  let { email } = comparing;
  let emailDataBase = await Users.findOne({ where: { email } });
  return emailDataBase;
}
export async function getUserSoloByEmailGoogle(comparing) {
  const { email, hashgoogle } = comparing;
  let userByEmail;
  let emailDataBase = await Users.findOne({ where: { email } });
  if (emailDataBase === null) {
    userByEmail = await createUser(comparing);
    return userByEmail;
  } else {
    userByEmail = Users.findOne({
      where: {
        email,
        hashgoogle,
      },
    });
    return userByEmail;
  }
}

// if (email && !password) {
//     let userByEmail = Users.findOne({
//         where: {
//             email
//         }
//     });
//     return userByEmail;
// }

export function deleteUserById(id) {
  const userDelete = Users.destroy({ where: { id } });
  return userDelete;
}

export async function updateUserByTypeAccount({
  activity,
  email,
  name,
  last_name,
  password,
  avatar,
  type_account,
  notifications,
  id,
  type_account_logged,
}) {
  if (type_account_logged === "3") {
    if (id !== 1) {
      if (activity === false || activity === true) {
        let userSupermId = await Users.findOne({ where: { id: id } });
        let activityChange = await SuperM.update({ activity: activity }, { where: { id: userSupermId.superMId } })

      }
      let datas = {
        activity,
        email,
        name,
        last_name,
        password,
        avatar,
        type_account,
        notifications,
      };
      const dataForChange = {};

      for (let key in datas) {
        if (datas[key] !== undefined) {
          dataForChange[key] = datas[key];
        }
      }
      if (type_account == "2") {
        let findUser = await Users.findOne({ where: { id } })
        let updateMarket = await SuperM.update({ show: true }, { where: { id: findUser.superMId } })
        let updatedAdmin = await Users.update(dataForChange, { where: { id } });
        return updatedAdmin;
      }
      let updatedAdmin = await Users.update(dataForChange, { where: { id } });
      return updatedAdmin;
    }
  } else {
    let datas = { email, name, last_name, password, avatar, notifications };
    let dataForChange = {};
    for (let key in datas) {
      if (datas[key] !== undefined) {
        dataForChange[key] = datas[key];
      }
    }
    let updatingdUser = await Users.update(dataForChange, { where: { id } });
    let updatedUser = await Users.findOne({ where: { id } });
    console.log(updatedUser);
    return updatedUser;
  }
}
