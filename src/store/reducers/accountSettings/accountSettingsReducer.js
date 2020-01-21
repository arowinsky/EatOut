import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../update";

const initState = {
  accountData: null
};
const accountData = (state, action) => {
  console.log(action.accountData);
  return updateObject(state, {
    accountData: action.accountData
  });
};

const accountSettingsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_DATA:
      return accountData(state, action);
    default:
      return state;
  }
};

export default accountSettingsReducer;
