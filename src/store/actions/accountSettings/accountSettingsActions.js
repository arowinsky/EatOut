import * as actionTypes from "../actionTypes";
export const getUserData = z => {
  console.log(z);
  return dispatch => {
    const url = "http://localhost:8080/get-user-data";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        dispatch(accountData(response));
      });
  };
};
export const accountData = accountData => {
  console.log(accountData);
  return {
    type: actionTypes.ACCOUNT_DATA,
    accountData: accountData
  };
};

export const editUserData = (z, firstName, lastName, username) => {
  console.log(
    "TCL: editUserData -> z,firstName, lastName, username",
    z,
    firstName,
    lastName,
    username
  );
  return dispatch => {
    const url = "http://localhost:8080/update-firebase-user-data";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `z=${z}&firstName=${firstName}&lastName=${lastName}&username=${username}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        dispatch(editedBasicUserData(response));
      });
  };
};

export const editedBasicUserData = editedBasicUserData => {
  return {
    type: actionTypes.EDITED_BASIC_USERDATA,
    editedBasicUserData: editedBasicUserData
  };
};

export const editUserEmail = (z, email) => {
  return dispatch => {
    const url = "http://localhost:8080/update-login-user-data";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `z=${z}&email=${email}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
      });
  };
};
