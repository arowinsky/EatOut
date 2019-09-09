import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../update";

const initState = {
  token: null,
  userid: null,
  userInfo: null,
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

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};

const authLogOut = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null
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
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogOut(state, action);
    default:
      return state;
  }
};

export default authReducer;
