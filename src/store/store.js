import { legacy_createStore as createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

export const myStore = createStore(userReducer);
