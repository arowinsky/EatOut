import React from "react";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import Header from "../../components/Header/Header";
import Stage from "../../components/Header/Stage/Stage";
import OwnerContent from "../../components/LocalOwner/OwnerContent/OwnerContent";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";

class Root extends React.Component {
  state = {
    sideBarOpen: false
  };

  sideBarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    });
  };
  render() {
    let sideBar;

    if(this.state.sideBarOpen) {
      sideBar = <SideBarMenu/>
    }
    return (
      <BrowserRouter>
        <>
          <Header sideBarClickHander={this.sideBarToggleClickHandler} />
         {sideBar}
          <Stage />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/owner-home" component={OwnerContent} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
export default Root;
