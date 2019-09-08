import React from "react";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import Header from "../../components/Header/Header";
import OwnerContent from "../../components/LocalOwner/OwnerContent/OwnerContent";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { connect } from "react-redux";
import LogOut from "../../components/Auth/LogOut/LogOut";
class Root extends React.Component {
  state = {
    sideBarOpen: false
  };

  sideBarToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  render() {
    let sideBar;

    if (this.props.isAuthenticated) {
      if (this.state.sideBarOpen) {
        sideBar = <SideBarMenu />;
      }
    }

    return (
      <BrowserRouter>
        <>
          <Header
            isAuth={this.props.isAuthenticated}
            sideBarClickHander={this.sideBarToggleClickHandler}
          />
          {sideBar}
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={LoginView} />
            <Route path="/logout" component={LogOut} />
            <Route path="/register" component={RegisterView} />
            <Route path="/owner-home" component={OwnerContent} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token
  };
};

export default connect(mapStateToProps)(Root);
