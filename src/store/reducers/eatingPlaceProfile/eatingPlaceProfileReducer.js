import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  codeForClient: null
};

const returnCodeForClient = (state, action) => {
  return updateObject(state, {
    codeForClient: action.codeForClient
  });
};

const eatingPlaceProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RETURN_CODE_FOR_CLIENT:
      return returnCodeForClient(state, action);
    default:
      return state;
  }
};

export default eatingPlaceProfileReducer;
