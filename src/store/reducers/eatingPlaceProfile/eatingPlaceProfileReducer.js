import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  codeForClient: null,
  clientCodeIsVerified: null,
  blockedOpinionForm: null,
  clientsOpinions: null
};

const returnCodeForClient = (state, action) => {
  return updateObject(state, {
    codeForClient: action.codeForClient
  });
};

const clientCodeIsVerified = (state, action) => {
  return updateObject(state, {
    clientCodeIsVerified: action.clientCodeIsVerified
  });
};

const blockOpinionForm = (state, action) => {
  return updateObject(state, {
    blockedOpinionForm: action.blockedOpinionForm
  });
};

const showClientsOpinions = (state, action) => {
  console.log(action.clientsOpinions);
  return updateObject(state, {
    clientsOpinions: action.clientsOpinions
  });
};

const eatingPlaceProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RETURN_CODE_FOR_CLIENT:
      return returnCodeForClient(state, action);
    case actionTypes.CLIENT_CODE_IS_VERIFIED:
      return clientCodeIsVerified(state, action);
    case actionTypes.BLOCKED_OPINION_FORM:
      return blockOpinionForm;
    case actionTypes.SHOW_CLIENTS_OPINIONS:
      return showClientsOpinions(state, action);
    default:
      return state;
  }
};

export default eatingPlaceProfileReducer;
