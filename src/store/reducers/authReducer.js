const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Błąd logowania");
      return {
        ...state,
        authError: "Nie udało się zalogować"
      };
    case "LOGIN_SUCCESS":
      console.log("Logowanie udane");
      return {
        ...state,
        authError: true
      };
    case "SIGNOUT_SUCCESS":
      console.log("uytkownik został wylogowany");
      return state;
    default:
      return state;
  }
};

export default authReducer;
