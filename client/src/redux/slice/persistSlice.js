import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: false,
    name: '',
    id: "",
    type_account: '',
    last_name: '',
    email: '',
    avatar: '',
    darkMode: false
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
            state.id = action.payload.id
            state.email = action.payload.email;
        },
        allUsers(state, action) {
            state.user = action.payload;
        },
        createUser(state, action) {
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
        },
        loggedOut(state) {
            state.name = '';
            state.type_account = '';
            state.user = false;
            state.last_name = '';
            state.avatar = '';
            state.id = '';
            state.email = '';
        },
        changeTheme(state) {
            state.darkMode = !state.darkMode
        }
    }
},);

export const { oneUsers, changeTheme,loggedOut,createUser,allUsers } = bolsilloPersist.actions;
export default bolsilloPersist.reducer;