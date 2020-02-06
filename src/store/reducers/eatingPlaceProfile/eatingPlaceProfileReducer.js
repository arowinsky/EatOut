import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  codeForClient: null,
  clientCodeIsVerified: null,
  blockedOpinionForm: null,
  uploadedEatingPlaceImages: null,
  addedOwnerPost: null,
  updatedOwnerPosts: null,
  updatedClientsOpinions: null,
  searchedEatingPlaces: null,
  singleEatingPlace: null,
  userFollowingPlace: null,
  followingPlaces: null
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

const singleEatingPlace = (state, action) => {
  return updateObject(state, {
    singleEatingPlace: action.singleEatingPlace
  });
};

const userFollowingPlace = (state, action) => {
  return updateObject(state, {
    userFollowingPlace: action.userFollowingPlace
  });
};

const followingPlaces = (state, action) => {
  return updateObject(state, {
    followingPlaces: action.followingPlaces
  });
};

const eatingPlaceProfileReducer = (state = initState, action) => {
  switch (action.type) {
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
    case actionTypes.SINGLE_EATING_PLACE:
      return singleEatingPlace(state, action);
    case actionTypes.USER_FOLLOWING_PLACE:
      return userFollowingPlace(state, action);
    case actionTypes.FOLLOWING_PLACE:
      return followingPlaces(state, action);
    default:
      return state;
  }
};

export default eatingPlaceProfileReducer;
