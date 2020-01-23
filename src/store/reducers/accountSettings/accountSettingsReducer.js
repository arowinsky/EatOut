import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  accountData: null,
  editedBasicUserData: null,
  editedUserEmail: null,
  editedUserPassword: null,
  ownerAccountDeleted: null
};
const accountData = (state, action) => {
  console.log(action.accountData);
  return updateObject(state, {
    accountData: action.accountData
  });
};
const editedBasicUserData = (state, action) => {
  return updateObject(state, {
    editedBasicUserData: action.editedBasicUserData
  });
};
const editedUserEmail = (state, action) => {
  return updateObject(state, {
    editedUserEmail: action.editedUserEmail
  });
};
const editedUserPassword = (state, action) => {
  return updateObject(state, {
    editedUserPassword: action.editedUserPassword
  });
};

const ownerAccountDeleted = (state, action) => {
  return updateObject(state, {
    ownerAccountDeleted: action.ownerAccountDeleted
  });
};

const accountSettingsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_DATA:
      return accountData(state, action);
    case actionTypes.EDITED_BASIC_USERDATA:
      return editedBasicUserData(state, action);
    case actionTypes.EDITED_USER_EMAIL:
      return editedUserEmail(state, action);
    case actionTypes.EDITED_USER_PASSWORD:
      return editedUserPassword(state, action);
    case actionTypes.OWNER_ACCOUNT_DELETED:
      return ownerAccountDeleted(state, action);
    default:
      return state;
  }
};

export default accountSettingsReducer;
