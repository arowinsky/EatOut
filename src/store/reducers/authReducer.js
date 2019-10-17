import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../update";

const initState = {
  token: null,
  userid: null,
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
  error: null
};

const authStart = (state, action) => {
  return updateObject(state, { error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    userData: action.userData,
    error: null
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
    usernameFb: null
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
    default:
      return state;
  }
};

export default authReducer;
