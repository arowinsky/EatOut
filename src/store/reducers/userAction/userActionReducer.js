import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  verificatedEmail: null,
  resetedPassword: null
};

const verificationEmail = (state, action) => {
  console.log(action.verificatedEmail);
  return updateObject(state, {
    verificatedEmail: action.verificatedEmail
  });
};

const resetedPassword = (state, action) => {
  return updateObject(state, {
    resetedPassword: action.resetedPassword
  });
};

const userActionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EMAIL_VERIFICATED:
      return verificationEmail(state, action);
    case actionTypes.PASSWORD_RESETED:
      return resetedPassword(state, action);
    default:
      return state;
  }
};
export default userActionReducer;
