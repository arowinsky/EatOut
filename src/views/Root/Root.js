import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import Header from "../../components/Header/Header";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <h1>Działa!</h1>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
export default Root;
