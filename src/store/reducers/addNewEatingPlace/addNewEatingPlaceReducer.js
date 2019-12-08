import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  addedPlace: null,
  invalidFormatImagesEatingPlace: null,
  unavailableAllImageEatingPlace: null
};

export const addedPlace = (state, action) => {
  console.log(action.addedPlace);
  return updateObject(state, {
    addedPlace: action.addedPlace,
    idAddedPlace: action.idAddedPlace,
    idOwnerAddedEatingPlace: action.idOwnerAddedEatingPlace
  });
};

const invalidFormatImagesEatingPlace = (state, action) => {
  console.log(action.invalidFormatFile);
  return updateObject(state, {
    invalidFormatImagesEatingPlace: action.invalidFormatFile
  });
};
const unavailableAllImagesEatingPlace = (state, action) => {
  return updateObject(state, {
    unavailableAllImageEatingPlace: action.unavailableAllImageEatingPlace
  });
};

const addNewEatingPlaceReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADDED_NEW_PLACE:
      return addedPlace(state, action);
    case actionTypes.INVALID_FORMAT_IMAGES_EATING_PLACE:
      return invalidFormatImagesEatingPlace(state, action);
    case actionTypes.UNAVAILABLE_ALL_IMAGES_EATING_PLACE:
      return unavailableAllImagesEatingPlace(state, action);
    default:
      return state;
  }
};
export default addNewEatingPlaceReducer;
