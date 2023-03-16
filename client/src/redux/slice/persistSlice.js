import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  name: "",
  id: "",
  type_account: "",
  last_name: "",
  email: "",
  avatar: "",
  darkMode: false,
  superMId: "",
};

export const bolsilloPersist = createSlice({
  name: "bolsilloPersist",

  initialState,

  reducers: {
    oneUsers(state, action) {
      state.name = action.payload.name;
      state.type_account = action.payload.type_account;
      state.user = true;
      state.last_name = action.payload.last_name;
      state.avatar = action.payload.avatar;
      state.id = action.payload.id;
      state.email = action.payload.user_email;
      state.superMId = action.payload.superMId
    },
    createUser(state, action) {
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
    },
    loggedOut(state) {
      state.name = "";
      state.type_account = "";
      state.user = false;
      state.last_name = "";
      state.avatar = "";
      state.id = "";
      state.email = "";
      state.superMId = "";
    },
    changeTheme(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { oneUsers, changeTheme, loggedOut, createUser } =
  bolsilloPersist.actions;
export default bolsilloPersist.reducer;
