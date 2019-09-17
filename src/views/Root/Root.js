import React from "react";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import Header from "../../components/Header/Header";
import OwnerContent from "../../components/LocalOwner/OwnerContent/OwnerContent";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import NewLocalFirst from "../../components/LocalOwner/NewLocalForm/NewLocalFirst/NewLocalFirst";
import { connect } from "react-redux";
import LogOut from "../../components/Auth/LogOut/LogOut";
import ForgotPasswordView from "../ForgotPasswordView/ForgotPasswordView";
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

    if (this.props.isAuthenticated || this.props.userFbId) {
      if (this.state.sideBarOpen) {
        sideBar = <SideBarMenu />;
      }
    }
    console.log(this.props.userDataFb);

    return (
      <BrowserRouter>
        <>
          <Header
            isAuth={this.props.isAuthenticated}
            userIdFromFb={this.props.userFbId}
            userNameFromFb={this.props.userDataFb}
            sideBarClickHander={this.sideBarToggleClickHandler}
          />
          {sideBar}
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={LoginView} />
            <Route path="/logout" component={LogOut} />
            <Route path="/register" component={RegisterView} />
            <Route path="/forgot-password" component={ForgotPasswordView} />
            <Route path="/owner-home" component={OwnerContent} />
            <Route path="/add-new-local-1" component={NewLocalFirst} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token,
    userFbId: state.auth.idFb,
    userDataFb: state.auth.usernameFb
  };
};

export default connect(mapStateToProps)(Root);
