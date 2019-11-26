import React from "react";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterViews/RegisterView/RegisterView";
import RegisterSuccessView from "../RegisterViews/RegisterSuccessView/RegisterSuccessView";
import Header from "../../components/Header/Header";
import OwnerContent from "../../components/OwnerEatingPlace/OwnerContent/OwnerContent";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import FirstForm from "../../components/OwnerEatingPlace/AddEatingPlace/FirstForm/FirstForm";
import SecondForm from "../../components/OwnerEatingPlace/AddEatingPlace/SecondForm/SecondForm";
import SummaryForm from "../../components/OwnerEatingPlace/AddEatingPlace/SummaryForm/SummaryForm";
import { connect } from "react-redux";
import LogOut from "../../components/Auth/LogOut/LogOut";
import ForgotPasswordView from "../ForgotPasswordView/ForgotPasswordView";
import * as actions from "../../store/actions/index";
import PrivateRoute from "../../components/Common/PrivateRoute";
import E404 from "../Errors/HTTP/404";
import EatingPlaceProfile from "../../components/OwnerEatingPlace/EatingPlaceProfile/EatingPlaceProfile";
import GeneratorCodeForClientView from "../GeneratorCodeForClientView/GeneratorCodeForClientView";
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
    let test = false;
    let sideBar;
    const { isAuthenticated, userFbId, userGoogleId, z } = this.props;
    if (
      isAuthenticated === true ||
      userFbId === true ||
      userGoogleId === true ||
      z
    ) {
      if (this.state.sideBarOpen) {
        sideBar = <SideBarMenu />;
      }
    }
    if (
      isAuthenticated === null &&
      userFbId === null &&
      userGoogleId === null &&
      z === null
    ) {
      test = true;
      const z = localStorage.getItem("z");
      this.props.AutoLogin(z);
      this.props.AutoLoginSuccess(test);
    }

    return (
      <BrowserRouter>
        <>
          <Header
            isAuth={isAuthenticated || z}
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
            <PrivateRoute
              path="/add-eating-place-first-form"
              component={FirstForm}
            />
            <PrivateRoute
              path="/add-eating-place-second-form"
              component={SecondForm}
            />
            <PrivateRoute
              path="/add-eating-place-summary-form"
              component={SummaryForm}
            />
            <PrivateRoute
              path="/eating-place-profile"
              component={EatingPlaceProfile}
            />
            <PrivateRoute
              path="/generator-code-for-client"
              component={GeneratorCodeForClientView}
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
    userGoogleId: state.auth.userGoogleId,
    z: state.auth.z,
    userInfo: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AutoLoginSuccess: test => dispatch(actions.AutoLoginSuccess(test)),
    AutoLogin: z => dispatch(actions.AutoLogin(z))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
