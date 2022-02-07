import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { middleware } from "./middleware/api";

import companyReducer from "./reducers/companyReducer";
import driverReducer from "./reducers/driverReducer";
import jobReducer from "./reducers/jobReducer";
import login from "./reducers/isLoggedIn";
import loginReducer from "./reducers/loginReducer";

const reducers = combineReducers({
  company: companyReducer,
  driver: driverReducer,
  job: jobReducer,
});

export default createStore(reducers, applyMiddleware(middleware));
