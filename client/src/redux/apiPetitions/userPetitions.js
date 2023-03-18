import axios from "axios";
import { oneUsers, changeTheme } from "../slice/persistSlice";

import { allUsers, agCom } from "../slice/globalSlice";

import {
  firebase,
  googleAuthProvider,
} from "../../views/Firebase/ConfigFirebase";

export async function logearse(input, dispatch) {
  try {
    dispatch(oneUsers(input));
  } catch (error) {
    return error.response;
  }
}

export function changeColor(dispatch) {
  dispatch(changeTheme);
}

export async function crearUser(dispatch, input) {
  console.log(input);
  if (input.avatar.length < 5) {
    input.avatar =
      "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp";
  }
  try {
    const user = await axios.post("http://localhost:3001/user/postUsers", {
      name: input.user_name,
      avatar: input.avatar,
      email: input.user_email,
      last_name: input.last_name,
      password: input.password,
      type_account: "1",
    });
    dispatch(oneUsers(user.data));
    return user;
  } catch (error) {
    return error.message;
  }
}
export async function getUsers(dispatch) {
  try {
    const pedir = await axios.get("http://localhost:3001/user");
    dispatch(allUsers(pedir?.data));
  } catch (error) {
    return error.message;
  }
}

export async function updateUser(type_account_logged, id, type_account) {
  try {
    const user = await axios({
      method: "put",
      url: "http://localhost:3001/user/update",
      data: {
        type_account_logged: type_account_logged,
        id: id,
        type_account: type_account,
      },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function updateUserActivity(type_account_logged, id, activity) {
  try {
    const user = await axios({
      method: "put",
      url: "http://localhost:3001/user/update",
      data: {
        type_account_logged: type_account_logged,
        id: id,
        activity: activity,
      },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function getUserByEmail(email, password) {
  try {
    const user = await axios({
      method: "post",
      url: "http://localhost:3001/user/email",
      data: { email: email, password: password },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function getUserSoloByEmail(email) {
  try {
    const user = await axios({
      method: "post",
      url: "http://localhost:3001/user/soloemail",
      data: { email: email },
    });
    return user;
  } catch (error) {
    return error.message;
  }
}

export async function StartGoogleAuth(dispatch) {
  try {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        axios
          .post("http://localhost:3001/user/soloemail", {
            name: user.displayName,
            avatar: user.photoURL,
            email: user.email,
            hashgoogle: user.uid,
            type_account: "1",
          })
          .then((res) => res)
          .then((info) => {
            dispatch(oneUsers(info.data));
            return info.data;
          });
      });
  } catch (error) {
    return error.response;
  }
}

export async function getComments(dispatch) {
  try {
    let response = await axios.get(`http://localhost:3001/reviews/`);
    dispatch(agCom(response.data));
  } catch (error) {
    return error.message;
  }
}
export async function deleteComment(dispatch, id) {
  try {
    const user = await axios({
      method: "delete",
      url: "http://localhost:3001/reviews/deleteReview",
      data: id,
    });
    return getComments(dispatch)
  } catch (error) {
    return error.message;
  }
}

export async function postComments(dispatch, body) {
  try {
    let json = await axios.post(
      `http://localhost:3001/reviews/createpost`,
      body
    );
    const hola = await getComments(dispatch);
    return hola;
  } catch (error) {
    console.log(error);
  }
}
export async function payMercado(email) {
  console.log(email);
  const peticion = await axios.post(
    "http://localhost:3001/market/subscription"
  );
  console.log(peticion);
}

export async function autorizarMercado(payload) {
  try {
    let json = await axios.post(`http://localhost:3001/`, payload);
    return json;
  } catch (error) {
    console.log(error);
  }
}
