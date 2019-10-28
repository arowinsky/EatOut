import React from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class LogOut extends React.Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    const { z } = this.props;
    this.props.onLogout(z);
    localStorage.clear();
    return <Redirect to="/" />;
  }
}

const mapStateToProps = state => {
  return {
    z: state.auth.z
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: z => dispatch(actions.logOut(z))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
