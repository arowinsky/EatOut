import React from "react";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterViews/RegisterView/RegisterView";
import RegisterSuccessView from "../RegisterViews/RegisterSuccessView/RegisterSuccessView";
import Header from "../../components/Header/Header";
import OwnerContent from "../../components/LocalOwner/OwnerContent/OwnerContent";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import NewLocalFirst from "../../components/LocalOwner/NewLocalForm/NewLocalFirst/NewLocalFirst";
import NewLocalCategory from "../../components/LocalOwner/NewLocalForm/NewLocalCategory/NewLocalCategory";
import NewLocalResume from "../../components/LocalOwner/NewLocalForm/NewLocalResume/NewLocalResume";
import { connect } from "react-redux";
import LogOut from "../../components/Auth/LogOut/LogOut";
import ForgotPasswordView from "../ForgotPasswordView/ForgotPasswordView";
import * as actions from "../../store/actions/index";
import PrivateRoute from "../../components/Common/PrivateRoute";
import E404 from "../Errors/HTTP/404";
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
    let test;
    let sideBar;
    const { isAuthenticated, userFbId, userGoogleId } = this.props;
    if (isAuthenticated || userFbId || userGoogleId) {
      if (this.state.sideBarOpen) {
        sideBar = <SideBarMenu />;
      }
    }
    if (
      isAuthenticated === null ||
      userFbId === null ||
      userGoogleId === null
    ) {
      test = true;
      this.props.getCookies(test);
    }

    return (
      <BrowserRouter>
        <>
          <Header
            isAuth={isAuthenticated}
            userIdProvider={userFbId || userGoogleId}
            sideBarClickHander={this.sideBarToggleClickHandler}
          />
          {sideBar}
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={LoginView} />
            <Route path="/logout" component={LogOut} />
            <Route path="/register" component={RegisterView} />
            <Route path="/register-success" component={RegisterSuccessView} />
            <Route path="/forgot-password" component={ForgotPasswordView} />
            <PrivateRoute path="/owner-home" component={OwnerContent} />
            <PrivateRoute path="/add-new-local-1" component={NewLocalFirst} />
            <PrivateRoute
              path="/add-new-local-2"
              component={NewLocalCategory}
            />
            <PrivateRoute
              path="/add-new-local-resume"
              component={NewLocalResume}
            />
            <Route component={E404} />
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
    userGoogleId: state.auth.userGoogleId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCookies: test => dispatch(actions.getCookies(test))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
