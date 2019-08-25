const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Nie udało się zalogować"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      return state;
    case "SIGNUP_SUCCESS":
      console.log("rejestracja udana");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("rejestracja nie udana");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
