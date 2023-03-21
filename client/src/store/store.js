import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bolsillo from "../redux/slice/globalSlice";
import bolsilloPersist from "../redux/slice/persistSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//hola
const persistconfig = {
  key: 'root',
  storage,
  whitelist: ["bolsilloPersist"]
}
const rootreducer = combineReducers({
  bolsilloFeliz: bolsillo,
  bolsilloPersist: bolsilloPersist
})
const persistreducer = persistReducer(persistconfig, rootreducer)
const store = configureStore({
  reducer:
    persistreducer,
  middleware: [thunk]
});

export default store;