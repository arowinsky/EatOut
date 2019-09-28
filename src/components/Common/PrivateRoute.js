import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  userGoogleId,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticated || userGoogleId) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token,
  userGoogleId: state.auth.userGoogleId
});
export default connect(mapStateToProps)(PrivateRoute);
