import { createStore } from "redux";
import eatoutApp from "../reducers";

const store = createStore(
  eatoutApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
