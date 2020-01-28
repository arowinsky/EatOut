import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  haveEatingPlace: null
};
const ownerHaveEatingPlace = (state, action) => {
  return updateObject(state, {
    haveEatingPlace: action.haveEatingPlace
  });
};

const myEatingPlacesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.OWNER_HAVE_EATING_PLACE:
      return ownerHaveEatingPlace(state, action);
    default:
      return state;
  }
};
export default myEatingPlacesReducer;
