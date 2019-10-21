import React from "react";
import styles from "./UserData.module.scss";
import { connect } from "react-redux";

const UserData = ({ second, ...props }) => {
  const { userInfo, userDataFb, userDataGoogle } = props;
  let name;
  if (userInfo) {
    name = <div>{userInfo}</div>;
  } else if (userDataFb) {
    name = <div>{userDataFb}</div>;
  } else {
    name = <div>{userDataGoogle}</div>;
  }
  return <div className={second ? styles.second : styles.wrapper}>{name}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    userInfo: state.auth.userData,
    userDataFb: state.auth.usernameFb,
    userDataGoogle: state.auth.userDataGoogle
  };
};

export default connect(mapStateToProps)(UserData);
