import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import status from "./modules/status";

const reducer = combineReducers({
  user,
  status,
});

const store = configureStore({ reducer });

export default store;
