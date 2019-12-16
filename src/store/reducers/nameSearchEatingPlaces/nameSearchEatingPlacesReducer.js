import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  nameSearchEatingPlaces: null
};

const nameSearchEatingPlaces = (state, action) => {
  console.log(action.nameSearchEatingPlaces);
  return updateObject(state, {
    nameSearchEatingPlaces: action.nameSearchEatingPlaces
  });
};

const nameSearchEatingPlacesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCHED_EATING_PLACES:
      return nameSearchEatingPlaces(state, action);
    default:
      return state;
  }
};
export default nameSearchEatingPlacesReducer;
