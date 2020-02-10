import * as actionTypes from "../actionTypes";
export const userVerifyEmail = (mode, oobCode) => {
  console.log(mode, oobCode);
  return dispatch => {
    const url = `http://localhost:8080/verification-email?oobCode=${oobCode}`;
    fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "cors"
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        const { status } = response;
        dispatch(verificationEmail(status));
      });
  };
};

export const verificationEmail = verificatedEmail => {
  console.log(verificatedEmail);
  return {
    type: actionTypes.EMAIL_VERIFICATED,
    verificatedEmail: verificatedEmail
  };
};

export const resetPassword = (newPassword, oobCode) => {
  console.log(newPassword, oobCode);
  return dispatch => {
    const url = "http://localhost:8080/reset-password";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "cors",
      body: `newPassword=${newPassword}&oobCode=${oobCode}`
    })
      .then(Response => Response.json())
      .then(response => {
        const { resetPassword } = response;
        dispatch(resetedPassword(resetPassword));
      });
  };
};
export const resetedPassword = resetedPassword => {
  return {
    type: actionTypes.PASSWORD_RESETED,
    resetedPassword: resetedPassword
  };
};
