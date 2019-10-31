import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  userGoogleId,
  z,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticated || userGoogleId || z) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.z,
  userGoogleId: state.auth.userGoogleId
});
export default connect(mapStateToProps)(PrivateRoute);
