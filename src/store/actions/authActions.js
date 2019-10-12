import axios from "axios";
import firebase from "firebase";
import db from "../../configs/firebaseConfig";
import * as actionTypes from "./actionTypes";

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
      referrer: "no-referrer",
      body: `email=${email}&password=${password1}`
    })
      .then(Response => Response.json())
      .then(response => {
        const userData = response.name;
        const idToken = response.status;
        const localId = "1111111";
        const expiresIn = 3600;
        let dataIsCorrect = null;
        dispatch(validationsLogIn(dataIsCorrect));
        dispatch(authSuccess(idToken, localId, userData));
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch(err => {
        console.log(err.response.data.error);
        dispatch(authFail(err.response.data.error));
        dispatch(validationsLogIn(err.response.data.error.message));
      });
  };
};

export const forgotPassword = emailUser => {
  return dispatch => {
    console.log(emailUser);
    const data = {
      emailUser: emailUser
    };
    axios({
      method: "POST",
      requestType: "PASSWORD_RESET",
      email: data,
      url:
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAaJRfgtMU3LqvV07NyiaGfqUj_XGpkoNo",
      data: {
        requestType: "PASSWORD_RESET",
        email: data.emailUser
      }
    })
      .then(response => {
        console.log("wysłano", response);
      })
      .catch(err => {
        console.log("Nie wysłano", err.response.data.error);
        dispatch(validationsForgotPassword(err.response.data.error));
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
