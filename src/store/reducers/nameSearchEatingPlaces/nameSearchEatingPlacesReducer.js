import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  searchedEatingPlaces: null
};

const nameSearchEatingPlaces = (state, action) => {
  return updateObject(state, {
    searchedEatingPlaces: action.searchedEatingPlaces
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
