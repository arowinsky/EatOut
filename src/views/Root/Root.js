import React from "react";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import Header from "../../components/Header/Header";
import Stage from "../../components/Header/Stage/Stage";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header />
            <Stage />
            <h1>Działa!</h1>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/login" component={LoginView} />
              <Route path="/register" component={RegisterView} />
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default Root;
