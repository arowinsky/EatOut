import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  userGoogleId,
  userFbId,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated || userGoogleId) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.z,
    userGoogleId: state.auth.userGoogleId,
    userFbId: state.auth.idFb
  };
};
export default connect(mapStateToProps)(PrivateRoute);
