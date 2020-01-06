import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  haveEatingPlace: null,
  codeForClient: null,
  clientCodeIsVerified: null,
  blockedOpinionForm: null,
  uploadedEatingPlaceImages: null,
  addedOwnerPost: null,
  updatedOwnerPosts: null,
  updatedClientsOpinions: null,
  searchedEatingPlaces: null
};

const ownerHaveEatingPlace = (state, action) => {
  return updateObject(state, {
    haveEatingPlace: action.haveEatingPlace
  });
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

const addedOwnerPost = (state, action) => {
  return updateObject(state, {
    addedOwnerPost: action.addedOwnerPost
  });
};
const updatedOwnerPosts = (state, action) => {
  return updateObject(state, {
    updatedOwnerPosts: action.updatedOwnerPosts
  });
};

const updatedClientsOpinions = (state, action) => {
  return updateObject(state, {
    updatedClientsOpinions: action.updatedClientsOpinions
  });
};

const eatingPlaceProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.OWNER_HAVE_EATING_PLACE:
      return ownerHaveEatingPlace(state, action);
    case actionTypes.RETURN_CODE_FOR_CLIENT:
      return returnCodeForClient(state, action);
    case actionTypes.CLIENT_CODE_IS_VERIFIED:
      return clientCodeIsVerified(state, action);
    case actionTypes.BLOCKED_OPINION_FORM:
      return blockOpinionForm(state, action);
    case actionTypes.ADDED_OWNER_POST:
      return addedOwnerPost(state, action);
    case actionTypes.UPDATED_OWNER_POST:
      return updatedOwnerPosts(state, action);
    case actionTypes.UPDATED_CLIENTS_OPINIONS:
      return updatedClientsOpinions(state, action);
    default:
      return state;
  }
};

export default eatingPlaceProfileReducer;
