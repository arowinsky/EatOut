const hasha = require("hasha");
export const logIn = values => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(values.email);
    console.log(values.password);
    const email = values.email;
    const password = hasha(values.password, { algorithm: "sha256" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
