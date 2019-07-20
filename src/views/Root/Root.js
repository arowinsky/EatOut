import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import Navbar from "../../components/Navbar/Navbar";
import ModalRegister from "../../components/Modals/ModalRegister/ModalRegister";

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
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <>
          <Navbar openModalFn={this.openModal} />
          <h1>Działa!</h1>
          <Switch>
            <Route exact path="/" component={HomeView} />
            {isModalOpen && <ModalRegister closeModalFn={this.closeModal} />}
            <Route path="/login" component={LoginView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
export default Root;
