import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eatingPlaceProfileReducer from "./eatingPlaceProfile/eatingPlaceProfileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  eatingPlaceProfile: eatingPlaceProfileReducer
});

export default rootReducer;
