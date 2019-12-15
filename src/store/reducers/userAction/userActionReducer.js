import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  verificatedEmail: null
};

const verificationEmail = (state, action) => {
  console.log(action.verificatedEmail);
  return updateObject(state, {
    verificatedEmail: action.verificatedEmail
  });
};

const userActionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EMAIL_VERIFICATED:
      return verificationEmail(state, action);
    default:
      return state;
  }
};
export default userActionReducer;
