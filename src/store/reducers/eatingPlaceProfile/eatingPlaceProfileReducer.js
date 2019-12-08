import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  codeForClient: null,
  clientCodeIsVerified: null,
  blockedOpinionForm: null,
  uploadedEatingPlaceImages: null,
  invalidFormatImagesEatingPlace: null,
  unavailableAllImageEatingPlace: null
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

const uploadedEatingPlaceImages = (state, action) => {
  console.log(
    "TCL: uploadedEatingPlaceImages -> action",
    action.uploadedEatingPlaceImages
  );

  return updateObject(state, {
    uploadedEatingPlaceImages: action.uploadedEatingPlaceImages
  });
};

const invalidFormatImagesEatingPlace = (state, action) => {
  return updateObject(state, {
    invalidFormatImagesEatingPlace: action.invalidFormatFile
  });
};
const unavailableAllImagesEatingPlace = (state, action) => {
  return updateObject(state, {
    unavailableAllImageEatingPlace: action.unavailableAllImageEatingPlace
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
    case actionTypes.UPLOADED_EATING_PLACE_IMAGES:
      return uploadedEatingPlaceImages(state, action);
    case actionTypes.INVALID_FORMAT_IMAGES_EATING_PLACE:
      return invalidFormatImagesEatingPlace(state, action);
    case actionTypes.UNAVAILABLE_ALL_IMAGES_EATING_PLACE:
      return unavailableAllImagesEatingPlace(state, action);
    default:
      return state;
  }
};

export default eatingPlaceProfileReducer;
