import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  ownerPlaceRemoved: null
};
const ownerPlaceRemoved = (state, action) => {
  console.log(action.ownerPlaceRemoved);
  return updateObject(state, {
    ownerPlaceRemoved: action.ownerPlaceRemoved
  });
};

const myEatingPlacesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.OWNER_PLACE_REMOVED:
      return ownerPlaceRemoved(state, action);
    default:
      return state;
  }
};
export default myEatingPlacesReducer;
