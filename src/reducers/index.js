import { combineReducers } from "redux";
import products from "./products";
import authenticationReducer from "./authenticationReducer";
import alertReducer from "./alertReducer";
const appReducers = combineReducers({
  products,
  authenticationReducer,
  alertReducer
});
export default appReducers;
