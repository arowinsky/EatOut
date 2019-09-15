import axios from "axios";
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
      password: hasha(password1, { algorithm: "sha256" })
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
