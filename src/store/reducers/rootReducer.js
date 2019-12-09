import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eatingPlaceProfileReducer from "./eatingPlaceProfile/eatingPlaceProfileReducer";
import addNewEatingPlaceReducer from "./addNewEatingPlace/addNewEatingPlaceReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  eatingPlaceProfile: eatingPlaceProfileReducer,
  addNewEatingPlace: addNewEatingPlaceReducer
});

export default rootReducer;
