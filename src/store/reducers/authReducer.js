import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../update";

const initState = {
  token: null,
  userId: null,
  userInfo: null,
  idFb: null,
  usernameFb: null,
  userGoogleId: null,
  userDataGoogle: null,
  validEmailSignUp: null,
  validUsername: null,
  emailNoVerified: null,
  validsLogIn: null,
  validForgotPassword: null,
  resetedPassword: null,
  error: null,
  z: null,
  userData: null,
  addedPlace: null,
  restaurantAvatar: null,
  restaurantHeader: null,
  restaurantMenu: null,
  haveEatingPlace: null
};

const authStart = (state, action) => {
  return updateObject(state, { error: null });
};

const authSuccess = (state, action) => {
  console.log(action.userId);
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    userData: action.userData,
    error: null
  });
};
export const userData = (state, action) => {
  console.log(action.userId);
  return updateObject(state, {
    userData: action.userData,
    userId: action.userId
  });
};
export const addedPlace = (state, action) => {
  return updateObject(state, {
    addedPlace: action.addedPlace
  });
};
const RegisterSuccess = (state, action) => {
  return updateObject(state, {
    userId: action.userId,
    error: null
  });
};
const facebookLogInSuccess = (state, action) => {
  return updateObject(state, {
    idFb: action.idFb,
    usernameFb: action.usernameFb
  });
};
const googleLogInSuccess = (state, action) => {
  return updateObject(state, {
    userGoogleId: action.userGoogleId,
    userDataGoogle: action.userDataGoogle
  });
};
const AutoLoginSuccess = (state, action) => {
  return updateObject(state, {
    userId: action.userId,
    token: action.tokenId
  });
};

const AutoLogin = (state, action) => {
  return updateObject(state, {
    z: action.z
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};

const validationEmailSignUp = (state, action) => {
  return updateObject(state, {
    validEmailSignUp: action.validEmailSignUp
  });
};
const validationUsername = (state, action) => {
  return updateObject(state, {
    validUsername: action.validUsername
  });
};

const noEmailVerified = (state, action) => {
  return updateObject(state, {
    emailNoVerified: action.emailNoVerified
  });
};

const validationsLogIn = (state, action) => {
  return updateObject(state, {
    validsLogIn: action.validsLogIn
  });
};

const authLogOut = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    idFb: null,
    usernameFb: null,
    z: null
  });
};
const validationsForgotPassword = (state, action) => {
  return updateObject(state, {
    validForgotPassword: action.validForgotPassword
  });
};
const sendedEmailWithLinkResetPassword = (state, action) => {
  return updateObject(state, {
    resetedPassword: action.resetedPassword
  });
};
const setRestaurantAvatar = (state, action) => {
  console.log(action.restaurantAvatar);
  return updateObject(state, {
    restaurantAvatar: action.restaurantAvatar
  });
};
const setRestaurantHeader = (state, action) => {
  console.log(action.restaurantHeader);
  return updateObject(state, {
    restaurantHeader: action.restaurantHeader
  });
};
const setRestaurantMenu = (state, action) => {
  console.log(action.restaurantMenu);
  return updateObject(state, {
    restaurantMenu: action.restaurantMenu
  });
};
const ownerHaveEatingPlace = (state, action) => {
  console.log(action.haveEatingPlace);
  return updateObject(state, {
    haveEatingPlace: action.haveEatingPlace
  });
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.REGISTER_SUCCESS:
      return RegisterSuccess(state, action);
    case actionTypes.AUTH_FACEBOOK_LOGIN_SUCCESS:
      return facebookLogInSuccess(state, action);
    case actionTypes.AUTH_GOOGLE_LOGIN_SUCCESS:
      return googleLogInSuccess(state, action);
    case actionTypes.AUTH_AUTO_LOGIN_SUCCESS:
      return AutoLoginSuccess(state, action);
    case actionTypes.AUTH_AUTO_LOGIN:
      return AutoLogin(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogOut(state, action);
    case actionTypes.AUTH_VALIDATION_EMAIL_SIGNUP:
      return validationEmailSignUp(state, action);
    case actionTypes.AUTH_VALIDATION_USERNAME:
      return validationUsername(state, action);
    case actionTypes.AUTH_VALIDATION_EMAIL_VERIFIED:
      return noEmailVerified(state, action);
    case actionTypes.AUTH_VALIDATIONS_LOGIN:
      return validationsLogIn(state, action);
    case actionTypes.AUTH_VALIDATIONS_FORGOT_PASSWORD:
      return validationsForgotPassword(state, action);
    case actionTypes.AUTH_SENDED_EMAIL_WITH_LINK_RESET_PASSWORD:
      return sendedEmailWithLinkResetPassword(state, action);
    case actionTypes.AUTH_DATA:
      return userData(state, action);
    case actionTypes.ADDED_NEW_PLACE:
      return addedPlace(state, action);
    case actionTypes.SET_RESTAURANT_AVATAR:
      return setRestaurantAvatar(state, action);
    case actionTypes.SET_RESTAURANT_HEADER:
      return setRestaurantHeader(state, action);
    case actionTypes.SET_RESTAURANT_MENU:
      return setRestaurantMenu(state, action);
    case actionTypes.OWNER_HAVE_EATING_PLACE:
      return ownerHaveEatingPlace(state, action);
    default:
      return state;
  }
};

export default authReducer;
