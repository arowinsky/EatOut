import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eatingPlaceProfileReducer from "./eatingPlaceProfile/eatingPlaceProfileReducer";
import addNewEatingPlaceReducer from "./addNewEatingPlace/addNewEatingPlaceReducer";
import userActionReducer from "./userAction/userActionReducer";
import nameSearchEatingPlacesReducer from "./nameSearchEatingPlaces/nameSearchEatingPlacesReducer";
import accountSettingsReducer from "./accountSettings/accountSettingsReducer";
import myEatingPlacesReducer from "./myEatingPlaces/myEatingPlacesReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  eatingPlaceProfile: eatingPlaceProfileReducer,
  addNewEatingPlace: addNewEatingPlaceReducer,
  userAction: userActionReducer,
  nameSearchEatingPlaces: nameSearchEatingPlacesReducer,
  accountSettings: accountSettingsReducer,
  myEatingPlaces: myEatingPlacesReducer
});

export default rootReducer;
