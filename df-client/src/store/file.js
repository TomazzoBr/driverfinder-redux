import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { middleware } from "./middleware/api";

import login from "./reducers/isLoggedIn";
import loginReducer from "./reducers/loginReducer";

const reducers = combineReducers({});

export default createStore(reducers, applyMiddleware(middleware));
