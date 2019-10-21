import React from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class LogOut extends React.Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    localStorage.clear();
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
