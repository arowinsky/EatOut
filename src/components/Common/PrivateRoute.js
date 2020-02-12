import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.z
  };
};
export default connect(mapStateToProps)(PrivateRoute);
