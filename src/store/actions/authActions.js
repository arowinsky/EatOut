import axios from "axios";
import firebase from "firebase";
import db from "../../configs/firebaseConfig";
import * as actionTypes from "./actionTypes";
const hasha = require("hasha");

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId, userData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    userData: userData
  };
};

export const RegisterSuccess = userId => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    userId: userId
  };
};
export const facebookLogInSuccess = (idFb, usernameFb) => {
  console.log(idFb, usernameFb);
  return {
    type: actionTypes.AUTH_FACEBOOK_LOGIN_SUCCESS,
    idFb: idFb,
    usernameFb: usernameFb
  };
};

export const googleLogInSuccess = (userGoogleId, userDataGoogle) => {
  return {
    type: actionTypes.AUTH_GOOGLE_LOGIN_SUCCESS,
    userGoogleId: userGoogleId,
    userDataGoogle: userDataGoogle
  };
};
export const AutoLoginSuccess = (tokenId, userId) => {
  return {
    type: actionTypes.AUTH_AUTO_LOGIN_SUCCESS,
    userId: userId,
    tokenId: tokenId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
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

export const validationsForgotPassword = validForgotPassword => {
  return {
    type: actionTypes.AUTH_VALIDATIONS_FORGOT_PASSWORD,
    validForgotPassword: validForgotPassword
  };
};
export const sendedEmailWithLinkResetPassword = resetedPassword => {
  console.log("TCL: resetedPassword", resetedPassword);

  return {
    type: actionTypes.AUTH_SENDED_EMAIL_WITH_LINK_RESET_PASSWORD,
    resetedPassword: resetedPassword
  };
};

export const signUp = (email, password1, firstname, lastname, username) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password1
    };

    db.collection("users")
      .where("username", "==", username)
      .get()
      .then(docs => {
        if (docs.size >= 1) {
          dispatch(validationUsername(docs.size));
        } else {
          dispatch(validationUsername(docs.size));
          axios
            .post(
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaJRfgtMU3LqvV07NyiaGfqUj_XGpkoNo",
              authData
            )
            .then(response => {
              let validEmailSignUp = null;
              dispatch(validationEmailSignUp(validEmailSignUp));
              db.collection("users")
                .doc(response.data.localId)
                .set({
                  firstName: firstname,
                  lastName: lastname,
                  username: username,
                  userData: firstname + " " + lastname
                })
                .then(() => {
                  dispatch(RegisterSuccess(response.data.localId));
                  axios({
                    method: "post",
                    url:
                      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAaJRfgtMU3LqvV07NyiaGfqUj_XGpkoNo",
                    headers: {},
                    data: {
                      requestType: "VERIFY_EMAIL",
                      idToken: response.data.idToken
                    }
                  }).catch(err => {
                    console.log("Email weryfikacyjny nie został wysłany", err);
                  });
                })
                .catch(err => {
                  console.log("Błąd firestore", err);
                });
            })
            .catch(err => {
              dispatch(validationEmailSignUp(err.response.data.error.message));
            });
        }
      })
      .catch(() => {
        console.log("Błąd sprawdzania username");
      });
  };
};

export const logIn = (email, password1, firstname, lastname, username) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password1,
      firstname: firstname,
      lastname: lastname,
      username: username,
      returnSecureToken: true
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAaJRfgtMU3LqvV07NyiaGfqUj_XGpkoNo",
        authData
      )
      .then(response => {
        let dataIsCorrect = null;
        dispatch(validationsLogIn(dataIsCorrect));
        let idToken = response.data.idToken;
        let localId = response.data.localId;
        let expiresIn = response.data.expiresIn;
        axios({
          method: "POST",
          url:
            "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAaJRfgtMU3LqvV07NyiaGfqUj_XGpkoNo",
          data: {
            idToken: response.data.idToken
          }
        }).then(res => {
          db.collection("users")
            .doc(res.data.users[0].localId)
            .get()
            .then(doc => {
              let userData = doc.data().userData;
              if (res.data.users[0].emailVerified) {
                localStorage.setItem("idToken", idToken);
                localStorage.setItem("localId", localId);
                dispatch(authSuccess(idToken, localId, userData));
                dispatch(checkAuthTimeout(expiresIn));
              } else {
                let messageNoActive = true;
                dispatch(noEmailVerified(messageNoActive));
              }
            });
        });
      })
      .catch(err => {
        console.log(err.response.data.error);
        dispatch(authFail(err.response.data.error));
        dispatch(validationsLogIn(err.response.data.error.message));
      });
  };
};

export const forgotPassword = email => {
  return dispatch => {
    const url = "http://localhost:8080/reset-password";
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
        console.log("TCL: response", response);
        console.log(response.resetedPassword);

        const resetedPassword = response.resetedPassword;
        if (resetedPassword === true) {
          dispatch(sendedEmailWithLinkResetPassword(resetedPassword));
        }
        if (resetedPassword === false) {
          dispatch(validationsForgotPassword(resetedPassword));
        }
      });
  };
};

export const facebookLogIn = () => {
  return dispatch => {
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        console.log(result.additionalUserInfo.profile.id);

        console.log("logowanie");
        let username = result.user.displayName;
        let photoMain = result.user.photoURL;
        let userProvider = result.additionalUserInfo.providerId;
        let uid = result.user.Nb.uid;
        let id = result.additionalUserInfo.profile.id;
        dispatch(facebookLogInSuccess(id, username));
        console.log(username, photoMain, userProvider, uid);
        if (result.additionalUserInfo.isNewUser) {
          db.collection("users")
            .doc(uid)
            .set({
              firstName: "",
              lastName: "",
              username: username,
              userData: username,
              photoMain: photoMain,
              provaider: userProvider
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const googleLogIn = () => {
  return dispatch => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log("logowanie");
        console.log(result);
        let username = result.user.displayName;
        let photoMain = result.user.photoURL;
        let userProvider = result.additionalUserInfo.providerId;
        let uid = result.user.Nb.uid;
        let idToken = result.credential.idToken;
        console.log(username, photoMain, userProvider, uid);
        dispatch(facebookLogInSuccess(idToken, username));
        localStorage.setItem("idToken", idToken);
        if (result.additionalUserInfo.isNewUser) {
          db.collection("users")
            .doc(uid)
            .set({
              firstName: "",
              lastName: "",
              username: username,
              userData: username,
              photoMain: photoMain,
              provaider: userProvider
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getCookies = test => {
  return dispatch => {
    const idToken = localStorage.getItem("idToken");
    const localId = localStorage.getItem("localId");
    dispatch(AutoLoginSuccess(idToken, localId));
  };
};
