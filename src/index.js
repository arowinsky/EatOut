import React from "react";
import ReactDOM from "react-dom";
import "views/Root/index.scss";
import Root from "views/Root/Root";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// const logger = store => {
//   return next => {
//     return action => {
//       console.log("[Middleware] Dispatching", action);
//       const result = next(action);
//       console.log("[Middleware] next state", store.getState());
//       return result;
//     };
//   };
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//   auth: authReducer,
// })

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
