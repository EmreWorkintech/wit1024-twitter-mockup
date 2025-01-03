import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const myStore = createStore(userReducer, applyMiddleware(thunk, logger));
