import firebase from "firebase";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId, userData, z, userRule) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    userData: userData,
    z: z,
    userRule: userRule
  };
};
export const currentUserData = (userData, userId, userRule) => {
  return {
    type: actionTypes.AUTH_DATA,
    userData: userData,
    userId: userId,
    userRule: userRule
  };
};

export const RegisterSuccess = userId => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    userId: userId
  };
};

export const AutoLoginSuccess = test => {
  return dispatch => {
    const z = localStorage.getItem("z");
    const url = `http://localhost:8080/autoLogin?id=${z}&reSend=${test}`;
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
        const { userRule, userData, userInfo, userId } = response;
        if (userData) {
          dispatch(currentUserData(userData, userId, userRule));
        } else {
          dispatch(currentUserData(userInfo, userId, userRule));
        }
      });
  };
};

export const AutoLogin = z => {
  return {
    type: actionTypes.AUTH_AUTO_LOGIN,
    z: z
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const aLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logOut = z => {
  return dispatch => {
    const url = "http://localhost:8080/logout";
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
        const userLogOuted = response.userLogOuted;
        if (userLogOuted === true) {
          localStorage.removeItem("z");
          dispatch(aLogout());
        }
      });
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(aLogout());
    }, expirationTime * 1000);
  };
};
export const validationEmailSignUp = validEmailSignUp => {
  return {
    type: actionTypes.AUTH_VALIDATION_EMAIL_SIGNUP,
    validEmailSignUp: validEmailSignUp
  };
};

export const validationUsername = validUsername => {
  return {
    type: actionTypes.AUTH_VALIDATION_USERNAME,
    validUsername: validUsername
  };
};

export const noEmailVerified = emailNoVerified => {
  return {
    type: actionTypes.AUTH_VALIDATION_EMAIL_VERIFIED,
    emailNoVerified: emailNoVerified
  };
};

export const validationsLogIn = validsLogIn => {
  return {
    type: actionTypes.AUTH_VALIDATIONS_LOGIN,
    validsLogIn: validsLogIn
  };
};

export const validationsSendMailResetPassword = validSendMailResetPassword => {
  return {
    type: actionTypes.AUTH_VALIDATIONS_SEND_MAIL_RESET_PASSWORD,
    validSendMailResetPassword: validSendMailResetPassword
  };
};
export const mailWithResetPasswordSent = mailWithResetPasswordSent => {
  return {
    type: actionTypes.AUTH_SENDED_EMAIL_WITH_LINK_RESET_PASSWORD,
    mailWithResetPasswordSent: mailWithResetPasswordSent
  };
};

export const signUp = (email, password1, firstname, lastname, username) => {
  return dispatch => {
    dispatch(authStart());
    const url = "http://localhost:8080/register";
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
      body: `email=${email}&password=${password1}&firstName=${firstname}&lastName=${lastname}&userName=${username}`
    })
      .then(Response => Response.json())
      .then(response => {
        const isRegistered = response.isRegistered;
        const usernameTaken = response.usernameTaken;
        const emailTaken = response.emailTaken;
        dispatch(RegisterSuccess(isRegistered));
        dispatch(validationUsername(usernameTaken));
        dispatch(validationEmailSignUp(emailTaken));
      });
  };
};

export const logIn = (email, password1) => {
  return dispatch => {
    dispatch(authStart());
    const url = "http://localhost:8080/loginEmail";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      body: `email=${email}&password=${password1}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        const {
          userRule,
          name,
          status,
          error,
          emailUnverified,
          userId
        } = response;
        const expiresIn = 3600;
        let dataIsCorrect = null;
        let z = null;
        let tooManyAttempts = null;
        localStorage.setItem("z", response.idSession);
        dispatch(AutoLogin(z));
        dispatch(noEmailVerified(emailUnverified));
        if (error === "EMAIL_NOT_FOUND" || error === "INVALID_PASSWORD") {
          dataIsCorrect = true;
          dispatch(validationsLogIn(dataIsCorrect));
        } else if (
          error ===
          "TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later."
        ) {
          tooManyAttempts = true;
          dispatch(tooManyAttemptsLogInTryLater(tooManyAttempts));
        } else {
          z = localStorage.getItem("z");
        }
        dispatch(authSuccess(status, userId, name, z, userRule));
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch(err => {
        console.log(err);
        if (err) {
          console.log("server not working!");
        }
      });
  };
};

export const tooManyAttemptsLogInTryLater = tooManyAttemptsLogInTryLater => {
  return {
    type: actionTypes.TOO_MANY_ATTEMPTS_LOG_IN_TRY_LATER,
    tooManyAttemptsLogInTryLater: tooManyAttemptsLogInTryLater
  };
};

export const sendMailResetPassword = email => {
  return dispatch => {
    const url = "http://localhost:8080/send-mail-to-reset-password";
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `email=${email}`
    })
      .then(Response => Response.json())
      .then(response => {
        const { mailSent } = response;
        console.log(response);
        if (mailSent === true) {
          dispatch(mailWithResetPasswordSent(mailSent));
        }
        if (mailSent === false) {
          dispatch(validationsSendMailResetPassword(mailSent));
        }
      });
  };
};

export const facebookLogIn = () => {
  return dispatch => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        const uid = result.user.uid;
        const displayName = result.user.displayName;
        const email = result.user.email;
        const token = result.user.refreshToken;
        const provider = result.credential.providerId;
        const newUser = result.additionalUserInfo.isNewUser;

        const url = "http://localhost:8080/login-social-media";
        fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow",
          referrer: "no-referrer",
          body: `uid=${uid}&&displayName=${displayName}&&email${email}&&token=${token}&&provider=${provider}&&newUser=${newUser}`
        })
          .then(Response => Response.json())
          .then(response => {
            console.log(response);
            console.log(displayName);
            const { idSession, userId, userRule } = response;
            localStorage.setItem("z", idSession);
            dispatch(facebookLogInSuccess(userId, displayName, userRule));
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const facebookLogInSuccess = (idFb, usernameFb, userRule) => {
  console.log(idFb, usernameFb);
  return {
    type: actionTypes.AUTH_FACEBOOK_LOGIN_SUCCESS,
    idFb: idFb,
    usernameFb: usernameFb,
    userRule: userRule
  };
};

export const googleLogIn = () => {
  return dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const uid = result.user.uid;
        const displayName = result.user.displayName;
        const email = result.user.email;
        const token = result.user.refreshToken;
        const provider = result.credential.providerId;
        const newUser = result.additionalUserInfo.isNewUser;
        const url = "http://localhost:8080/login-social-media";
        fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow",
          referrer: "no-referrer",
          body: `uid=${uid}&&displayName=${displayName}&&email${email}&&token=${token}&&provider=${provider}&&newUser=${newUser}`
        })
          .then(Response => Response.json())
          .then(response => {
            const { idSession, userId, userRule } = response;
            localStorage.setItem("z", idSession);
            dispatch(googleLogInSuccess(userId, displayName, userRule));
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const googleLogInSuccess = (userGoogleId, userDataGoogle, userRule) => {
  return {
    type: actionTypes.AUTH_GOOGLE_LOGIN_SUCCESS,
    userGoogleId: userGoogleId,
    userDataGoogle: userDataGoogle,
    userRule: userRule
  };
};
