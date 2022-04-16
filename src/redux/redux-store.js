import {applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer,
  auth: authReducer,
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store

export default store;
