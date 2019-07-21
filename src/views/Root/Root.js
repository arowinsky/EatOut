import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import Navbar from "../../components/Navbar/Navbar";

class Root extends React.Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar openModalFn={this.openModal} />
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
