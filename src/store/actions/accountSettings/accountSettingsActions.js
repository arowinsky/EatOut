import * as actionTypes from "../actionTypes";
export const getUserData = z => {
  return dispatch => {
    const url = `http://localhost:8080/get-user-data?z=${z}`;
    fetch(url, {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer"
    })
      .then(Response => Response.json())
      .then(response => {
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
        const { updateBasicData } = response;
        if (updateBasicData) {
          dispatch(editedBasicUserData(response));
        }
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
        const { updateEmail, email } = response;
        if (updateEmail) {
          dispatch(editedUserEmail(email));
        }
      });
  };
};

export const editedUserEmail = editedUserEmail => {
  return {
    type: actionTypes.EDITED_USER_EMAIL,
    editedUserEmail: editedUserEmail
  };
};
export const editUserPassword = (z, password) => {
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
      body: `z=${z}&password=${password}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        const { updatePassword } = response;
        dispatch(editedUserPassword(updatePassword));
      });
  };
};

export const editedUserPassword = editedUserPassword => {
  return {
    type: actionTypes.EDITED_USER_PASSWORD,
    editedUserPassword: editedUserPassword
  };
};

export const deleteOwnerAccount = z => {
  return dispatch => {
    const url = "http://localhost:8080/delete-owner-account";
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
        const { ownerDeleted } = response;
        if (ownerDeleted) {
          dispatch(ownerAccountDeleted(ownerDeleted));
        }
      });
  };
};
export const ownerAccountDeleted = ownerAccountDeleted => {
  return {
    type: actionTypes.OWNER_ACCOUNT_DELETED,
    ownerAccountDeleted: ownerAccountDeleted
  };
};

export const deleteClientAccount = z => {
  return dispatch => {
    const url =
      "http://localhost:8080/delete-client-account/?z=erewrerewrewrewrw2334524";
    fetch(url, {
      method: "DELETE",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
      // redirect: "follow",
      // referrer: "no-referrer",
      // body: `z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        const { clientDeleted } = response;
        if (clientDeleted) {
          dispatch(clientAccountDeleted(clientDeleted));
        }
      });
  };
};
export const clientAccountDeleted = clientAccountDeleted => {
  return {
    type: actionTypes.CLIENT_ACCOUNT_DELETED,
    clientAccountDeleted: clientAccountDeleted
  };
};
