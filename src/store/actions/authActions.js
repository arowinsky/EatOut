import storage from "../../configs/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId, userData, z) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    userData: userData,
    z: z
  };
};
export const userData = (userData, userId) => {
  return {
    type: actionTypes.AUTH_DATA,
    userData: userData,
    userId: userId
  };
};

export const RegisterSuccess = userId => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    userId: userId
  };
};
// export const facebookLogInSuccess = (idFb, usernameFb) => {
//   console.log(idFb, usernameFb);
//   return {
//     type: actionTypes.AUTH_FACEBOOK_LOGIN_SUCCESS,
//     idFb: idFb,
//     usernameFb: usernameFb
//   };
// };

// export const googleLogInSuccess = (userGoogleId, userDataGoogle) => {
//   return {
//     type: actionTypes.AUTH_GOOGLE_LOGIN_SUCCESS,
//     userGoogleId: userGoogleId,
//     userDataGoogle: userDataGoogle
//   };
// };
export const AutoLoginSuccess = test => {
  return dispatch => {
    const z = localStorage.getItem("z");
    const url = "http://localhost:8080/autoLogin";
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
      body: `sid=${z}&pleaseReSend=${test}`
    })
      .then(Response => Response.json())
      .then(response => {
        const userdata = response.userData;
        const userInfo = response.userInfo;
        const userId = response.userId;
        if (userdata) {
          dispatch(userData(userdata, userId));
          dispatch(getDataEatingPlace(z, userId));
        } else {
          dispatch(userData(userInfo, userId));
          dispatch(getDataEatingPlace(z, userId));
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

export const validationsForgotPassword = validForgotPassword => {
  return {
    type: actionTypes.AUTH_VALIDATIONS_FORGOT_PASSWORD,
    validForgotPassword: validForgotPassword
  };
};
export const sendedEmailWithLinkResetPassword = resetedPassword => {
  return {
    type: actionTypes.AUTH_SENDED_EMAIL_WITH_LINK_RESET_PASSWORD,
    resetedPassword: resetedPassword
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
      referrer: "no-referrer",
      body: `email=${email}&password=${password1}`
    })
      .then(Response => Response.json())
      .then(response => {
        const userData = response.name;
        const idToken = response.status;
        const err = response.error;
        const emailUnverified = response.emailUnverified;
        const localId = response.userId;
        const expiresIn = 3600;
        let dataIsCorrect = null;
        let z = null;
        localStorage.setItem("z", response.idSession);
        dispatch(AutoLogin(z));
        dispatch(noEmailVerified(emailUnverified));
        if (err === "EMAIL_NOT_FOUND") {
          dataIsCorrect = true;
          dispatch(validationsLogIn(dataIsCorrect));
        } else {
          z = localStorage.getItem("z");
          dispatch(getDataEatingPlace(z, localId));
        }
        dispatch(authSuccess(idToken, localId, userData, z));
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch(error => {
        console.log(error);
        if (error) {
          console.log("server not working!");
        }
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

export const ownerHaveEatingPlace = haveEatingPlace => {
  return {
    type: actionTypes.OWNER_HAVE_EATING_PLACE,
    haveEatingPlace: haveEatingPlace
  };
};

export const getDataEatingPlace = (z, localId) => {
  return dispatch => {
    let haveEatingPlace;
    const url = "http://localhost:8080/get-data-place";
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
      body: `z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        haveEatingPlace = response.places;
        dispatch(ownerHaveEatingPlace(haveEatingPlace));
      });
  };
};
// export const facebookLogIn = () => {
//   return dispatch => {
//     let provider = new firebase.auth.FacebookAuthProvider();

//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(result => {
//         console.log(result);
//         console.log(result.additionalUserInfo.profile.id);

//         console.log("logowanie");
//         let username = result.user.displayName;
//         let photoMain = result.user.photoURL;
//         let userProvider = result.additionalUserInfo.providerId;
//         let uid = result.user.Nb.uid;
//         let id = result.additionalUserInfo.profile.id;
//         dispatch(facebookLogInSuccess(id, username));
//         console.log(username, photoMain, userProvider, uid);
//         if (result.additionalUserInfo.isNewUser) {
//           db.collection("users")
//             .doc(uid)
//             .set({
//               firstName: "",
//               lastName: "",
//               username: username,
//               userData: username,
//               photoMain: photoMain,
//               provaider: userProvider
//             });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };

// export const googleLogIn = () => {
//   return dispatch => {
//     let provider = new firebase.auth.GoogleAuthProvider();

//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(result => {
//         console.log("logowanie");
//         console.log(result);
//         let username = result.user.displayName;
//         let photoMain = result.user.photoURL;
//         let userProvider = result.additionalUserInfo.providerId;
//         let uid = result.user.Nb.uid;
//         let idToken = result.credential.idToken;
//         console.log(username, photoMain, userProvider, uid);
//         dispatch(facebookLogInSuccess(idToken, username));
//         localStorage.setItem("idToken", idToken);
//         if (result.additionalUserInfo.isNewUser) {
//           db.collection("users")
//             .doc(uid)
//             .set({
//               firstName: "",
//               lastName: "",
//               username: username,
//               userData: username,
//               photoMain: photoMain,
//               provaider: userProvider
//             });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };
