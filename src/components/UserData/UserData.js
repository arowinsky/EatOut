import React from "react";
import styles from "./UserData.module.scss";
import { connect } from "react-redux";

const UserData = ({ second, ...props }) => {
  const { userInfo, userDataFb } = props;
  let name;
  if (userInfo) {
    name = <div>{userInfo}</div>;
  } else if (userDataFb) {
    name = <div>{userDataFb}</div>;
  }
  return <div className={second ? styles.second : styles.wrapper}>{name}</div>;
};

const mapStateToProps = state => {
  return {
    userInfo: state.auth.userData,
    userDataFb: state.auth.usernameFb
  };
};

export default connect(mapStateToProps)(UserData);
